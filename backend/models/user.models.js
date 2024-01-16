const { db } = require("../config/db");

const _getUser = (email) => {
  return db("users")
    .select("username", "email", "user_id")
    .where("email", email);
};

const _getUserPasswordHash = (email) => {
  return db("users").select("password_hash").where("email", email);
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

module.exports = { _getUser, _addNewUser, _getAllUsers, _getUserPasswordHash };
