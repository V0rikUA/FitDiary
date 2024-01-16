const { _getUser, _addNewUser } = require("../models/user.models");
const bcrypt = require("bcrypt");

const getUserData = async (req, res) => {
  const { email } = req.body;
  await _getUser(email)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(console.log(err)));
};

const addNewUser = async (req, res) => {
  const saltRounds = 10;
  const { name, email, password } = req.body;
  const passHash = await bcrypt.hash(password, saltRounds);

  try {
    const data = await _addNewUser(name, email, passHash);
    res.status(201).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send("it was an error");
  }
};

module.exports = { getUserData, addNewUser };
