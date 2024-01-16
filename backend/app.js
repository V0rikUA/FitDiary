const express = require("express");
const { userRouter } = require("./routes/user.routes");
const { default: helmet } = require("helmet");
const { _getAllUsers } = require("./models/user.models");
require("dotenv").config();

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: "true" }));
app.use(express.json());

app.use(helmet());
app.use("/api", userRouter);

app.get("/users", (req, res) => {
  try {
    _getAllUsers().then((data) => {
      console.log(data);
      res.json(data);
    });
  } catch (error) {
    console.log(error);
  }
});

// app.post("/api/user");
// app.update("/api/user");
// app.delete("/api/user");

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});


