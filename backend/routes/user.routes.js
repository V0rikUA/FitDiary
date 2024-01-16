const { getUserData, addNewUser } = require("../controller/user.controller");

const userRouter = require("express").Router();

userRouter.get("/user", getUserData);
userRouter.post("/user", addNewUser);
// userRouter.patch("/user/:id", updateUserData);
// userRouter.delete("/user/:id", deleteUserData);

module.exports = { userRouter };
