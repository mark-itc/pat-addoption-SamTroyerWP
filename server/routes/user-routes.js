const express = require('express');
const { signup, verifyToken, login, getUser } = require('../controllers/user-controller');

const userRouter = express.Router();

userRouter.post('/signup', signup);
userRouter.post('/login', login);
userRouter.get('/user', verifyToken, getUser);
// router.get('/refresh', refreshToken, verifyToken, getUser);

module.exports = userRouter;