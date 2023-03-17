const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const signup = async (req, res, next) => {
    const { email, password, phoneNumber} = req.body;
    const {firstName, lastName} = req.body.name;
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email});
    } catch (err) {
        console.log(err);
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
    } catch (err) {
        console.log(err);
    }
    return res.status(201).json({message: user})
}

const login = async (req, res, next) => {

    let user;

    try {
        user = await User.findOne({email: req.body.email})
    } catch (err) {
        return new Error(err);
    } if (!user) {
        return res.status(400).json({message: 'user not found. Please signup!'})
    }

    const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
    if(!isPasswordCorrect) {
        return res.status(400).json({message: 'invalid email or password'})
    }

    const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT_SECRET_KEY);

    const { password, isAdmin, ...otherDetails } = user._doc;


    return res
        .cookie("access_token", token, {
            httpOnly: true,
        })
        .status(200)
        .json({message: 'successfully logged in!', ...otherDetails })}

exports.signup = signup;
exports.login = login;