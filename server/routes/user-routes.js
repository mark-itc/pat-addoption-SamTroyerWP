const express = require('express');
const { signup, verifyToken, login, getUser, logout, uploadImage, getImageData } = require('../controllers/user-controller');

const userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.get('/user', verifyToken, getUser);
// router.get('/refresh', refreshToken, verifyToken, getUser);
userRouter.post('/logout', verifyToken, logout)
userRouter.post('/upload', uploadImage)
userRouter.get('/upload', getImageData)

module.exports = userRouter;