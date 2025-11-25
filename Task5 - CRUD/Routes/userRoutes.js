const controller = require("../Controller/usercontroller");
const express = require("express");
const customMiddleware = require("../middleware/customMiddleware");
const userRouter = express.Router();
const { getUsers, createUser, updateUser, deleteUser } = controller;

userRouter.get("/get-users", customMiddleware, getUsers); 
userRouter.post("/create-user", customMiddleware, createUser);
userRouter.put("/update-user/:id", customMiddleware, updateUser);
userRouter.delete("/delete-user/:id", customMiddleware, deleteUser);

module.exports = userRouter;
