const express = require('express');
const router = express.Router();
const Property = require('../models/Property')

// router.use((req, res, next) => {
//   let token = req.headers.authorization.split(" ")[1];

//   if (!token) return res.status(403).send("Unauthenticated");
//   var decoded = jwt.verify(token, "shhhhh");
//   if (!decoded) res.status(403).send("Unauthenticated");

//   User.findById(decoded.id).then((user) => {
//     if (!user) res.status(403).send("Unauthenticated");
//     else next();
//   });
// });

router.get("/properties", (req, res) => {
  Property.find()
    .then(properties => res.status(200).json(properties))
    .catch(err => res.status(500).json({ message: "Route Error", error: err  }));
});

router.post("/properties", (req, res) => {
  Property.create(req.body)
    .then(property => res.send("New Property Submitted"))
    .catch(err => res.status(500).send("Submission Error", err))
})

router.get("/properties/:id", (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => {
      if (!recipe) res.status(404).json({ message: "No such recipe" });
      else res.json(recipe);
    })
    .catch(err => {
      res.status(500).json({ message: "Route Error", error: err });
    });
});

module.exports = router;
