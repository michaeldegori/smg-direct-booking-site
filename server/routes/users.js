const express = require('express');
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


// USER SIGNUP
router.post("/signup", (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) console.log("HASHING ERROR", err);
    else {
      User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthdate: req.body.date,
        email: req.body.email,
        password: hash
      })
        .then((user) => {
          res.status(200).send("User Created");
        })
        .catch((err) => {
          res.status(500).send("User Creation Failed");
        });
    }
  });
});

//USER LOGIN
router.post("/login", (req, res) => {

  User.findOne({ email: req.body.email }).then(user => {
    if (!user) res.status(403).send("Invalid Login Credentials");
    else if (user) {
      bcrypt.compare(req.body.password, user.password, function (err, match) {
        if (err) res.status(500).send("Invalid Password");
        if (match) {
          const token = jwt.sign({ id: user._id }, "SQn!.JF#rG9D5,a>;+_m-hwKWB<S.#($xV^YQQ+KLxSrc{@qvjq(GLC!Cy<q})^");
          res.json({ token: token });
        } else res.status(403).send("Invalid credentials");
      });
    } else {
      res.status(403).send("Invalid credentials");
    }
  });
});

module.exports = router;
