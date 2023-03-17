const express = require('express');
const usersController = require('../controllers/users-controller');
const verifyToken = require('../utils/verifyToken');

const usersRouter = express.Router();


usersRouter.get("/checkauthentication", verifyToken.verifyToken, (req,res,next)=>{
  res.send("hello user, you are logged in")
})

// usersRouter.get("/checkuser/:id", verifyToken.verifyUser, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })

// usersRouter.get("/checkadmin/:id", verifyToken.verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })

usersRouter.get('/', verifyToken.verifyAdmin,usersController.getAllUsers);
usersRouter.get('/:id', verifyToken.verifyUser, usersController.getById);
usersRouter.put('/:id', verifyToken.verifyUser, usersController.updateUser);
usersRouter.delete('/:id', verifyToken.verifyUser,usersController.deleteUser)

module.exports = usersRouter;