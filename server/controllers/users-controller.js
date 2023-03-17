const User = require('../models/User')

const getAllUsers = async (req, res, next) => {
    let users;

    try {
        users = await User.find();
    } catch (e) {
        console.log(e)
    }

        if (!users) {
            return res.status(404).json({message: "No users found"})   
        }
        return res.status(200).json({users: users})
}

const getById = async (req, res, next) => {
    const id = req.params.id 
    let user;
    try {
        user = await User.findById(id);
    } catch (e) {
        console.log(e);
    }

    if (!user) {
        return res.status(404).json({message: "No user found"})   
    }
    return res.status(200).json({ user })
}

const updateUser = async(req, res, next) => {
    const id = req.params.id;
    const { email, password, phoneNumber, isAdmin } = req.body;
    const { firstName, lastName } = req.body.name;
    let user;
    try {
        user = await User.findByIdAndUpdate(id, {
            name: {
                firstName,
                lastName
            },
            email,
            password,
            phoneNumber,
            isAdmin
        });
        user = await user.save()
    } catch (e) {
        console.log(e)
    }

    if(!user) {
        return res.status(404).json({message: 'Unable to update by this Id'})
    }
    return res.status(200).json({ user })
}

const deleteUser = async(req, res, next) => {
    const id = req.params.id;
    let user;
    try {
        user = await User.findByIdAndRemove(id)
    } catch (e) {
        console.log(e)
    }

    if(!user) {
        return res.status(404).json({message: 'Unable to delete user by this ID'})
    }
    return res.status(200).json({ message: 'user successfully deleted' })

}

exports.getAllUsers = getAllUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;