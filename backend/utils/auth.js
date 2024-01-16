const { _getUserPasswordHash } = require("../models/user.models");
const bcrypt = require("bcrypt");

const authentication = (req, res, next) => {
  const { email, password } = req.body;
  console.log(req.body);
  _getUserPasswordHash(email).then((data) => {
    console.log(data[0].password_hash);
    if (bcrypt.compare(password, data[0].password_hash)) {
      next();
    } else {
      res.status(401).send("incorrect password");
    }
  });
};

module.exports = { authentication };
