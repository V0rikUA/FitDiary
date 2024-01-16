const { db } = require("../config/db");

const _getUser = (email) => {
  return db("users").where("email", email).first();
};

const _addNewUser = (userName, email, passHash) => {
  return db("users")
    .insert({
      username: userName,
      email: email,
      password_hash: passHash,
    })
    .returning(["user_id", "username", "email"]);
};

const _getAllUsers = () => {
  return db("users").select("*");
};

module.exports = { _getUser, _addNewUser, _getAllUsers };
