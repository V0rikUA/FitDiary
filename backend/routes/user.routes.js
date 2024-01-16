const { getUserData, addNewUser } = require("../controller/user.controller");
const { authentication } = require("../utils/auth.js");

const userRouter = require("express").Router();

userRouter.get("/user", authentication, getUserData);
userRouter.post("/user", addNewUser);
// userRouter.patch("/user/:id", updateUserData);
// userRouter.delete("/user/:id", deleteUserData);

module.exports = { userRouter };
