const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');


dotenv.config()



const signup = async (req, res, next) => {
    const { email, password, phoneNumber} = req.body;
    const {firstName, lastName} = req.body.name;
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email});
    } catch (e) {
        console.log(e);
    }
    if (existingUser) {
        return res.status(400).json({message: 'user already exists!  Did you mean to Login?'})
    }

    const hashedPassword = bcrypt.hashSync(password);

    const user = new User({
        name: {
            firstName,
            lastName
        },
        email,
        password: hashedPassword,
        phoneNumber
    });

    try {
        await user.save();
    } catch (e) {
        console.log(e);
    }

    return res.status(201).json({message: user})
}

const login = async (req, res, next) => {
    const {email, password} = req.body;

    let existingUser;
    try {
        existingUser = await User.findOne({ email: email});
    } catch (e) {
        return new Error(e);
    } if (!existingUser) {
        return res.status(400).json({message: 'user not found. Please signup!'})
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if(!isPasswordCorrect) {
        return res.status(400).json({message: 'invalid email or password'})
    }




    const token = jwt.sign({id: existingUser._id}, process.env.JWT_SECRET_KEY, {
        expiresIn: '30m'
    });


    // console.log('Generated Token\n', token)

    // if (req.cookies[`${existingUser.id}`]) {
    //     req.cookies[`${existingUser.id}`] = ""
    // }
    // res.cookie(String(existingUser.id), token, {
    //     path: '/',
    //     expires: new Date(Date.now() + 1000 * 30),
    //     httpOnly: true,
    //     sameSite: 'lax'
    // })

    return res.status(200).json({message: 'successfully logged in!', user: existingUser, token})
}


const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split([' '])[1]
    console.log(token);
    if (!token) {
        return res.status(404).json({message:'No token found'})
    }
    jwt.verify(token, process.env.JWT_SECRET_KEY, (e, user) => {
        if (e) {
            return res.status(400).json({message: 'invalid token'})
        }
        console.log(user.id);
        req.id = user.id;
    })
    next();
}

const getUser = async (req, res, next) => {
    const userId = req.id;
    let user;
    try {
        user = await User.findById(userId, '-password')
    } catch (e) {
        return new Error(e)
    }
    if (!user) {
        return res.status(404).json({message: 'user not found'})
    }
    return res.status(200).json({user})
}



// const refreshToken = (req, res, next) => {
//     const cookies = req.headers.cookie;
//     const prevToken = cookies.split(";");
//     const authHeader = req.headers['authorization']
//     const prevToken = authHeader && authHeader.split(' ')[1]
//     // const refreshToken = req.body.refreshToken;
//     if (!prevToken) {
//         return res.status(400).json({message:'No token found'})
//     }
    
//     jwt.verify(String(prevToken), process.env.JWT_SECRET_KEY, (e, user) => {
//         if (e) {
//             return res.status(403).json({message: 'authentication failed'});
//         }
       
//         res.clearCookie(`${user.id}`);
//         req.cookies[`${user.id}`] = "";
//         const token = jwt.sign({ id: user.id}, process.env.JWT_SECRET_KEY, {
//             expiresIn: '35s'
//         })

//         console.log('regenerated token\n', token)

//         res.cookie(String(user.id), token, {
//             path: "/",
//             expires: new Date(Date.now() + 1000 * 30),
//             httpOnly: true,
//             sameSite: "lax"
//         })
       

//         req.id = user.id;
//         next();
//     })
// }

exports.signup = signup;
exports.login = login;
exports.verifyToken = verifyToken;
exports.getUser = getUser;
// exports.refreshToken = refreshToken;