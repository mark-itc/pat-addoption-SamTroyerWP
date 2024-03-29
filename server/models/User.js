const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nameSchema = ({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
})

const userSchema = new Schema({
    name: {
        type: nameSchema,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    phoneNumber: {
        type: Number,
        required: true,
        minLength: 10
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
}, {timestamps: true}
)

module.exports = mongoose.model('User', userSchema)