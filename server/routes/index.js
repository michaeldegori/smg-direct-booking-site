const express = require('express');
const router = express.Router();
const Property = require('../models/Property');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const authCheck = (req, res, next) => {
  let token = req.headers?.authorization?.split(' ')[1];

  if (!token) return res.status(403).send('Unauthenticated');
  const decoded = jwt.verify(
    token,
    'SQn!.JF#rG9D5,a>;+_m-hwKWB<S.#($xV^YQQ+KLxSrc{@qvjq(GLC!Cy<q})^'
  );
  if (!decoded) res.status(403).send('Unauthenticated');

  User.findById(decoded.id)
    .then((user) => {
      if (!user) res.status(403).send('Unauthenticated');
      else next();
    })
    .catch((err) => console.log(err, 'Error'));
};

// ALL PROPERTIES
router.get('/properties', (req, res) => {
  Property.find()
    .then((properties) => res.status(200).json(properties))
    .catch((err) =>
      res.status(500).json({ message: 'Route Error', error: err })
    );
});

// SUBMIT NEW PROPERTY
router.post('/properties', authCheck, (req, res, next) => {
  Property.create(req.body)
    .then(() => res.send('New Property Submitted'))
    .catch((err) => res.status(500).send('Submission Error' + err));
});

// UPDATE EXISTING PROPERTY
router.put('/properties/:id', authCheck, (req, res, next) => {
  Property.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send('Property Updated'))
    .catch((err) => console.log('Update Submission Error', err));
});

// VIEW DETAILS OF INDIVIDUAL PROPERTY
router.get('/properties/:id', (req, res) => {
  Property.findById(req.params.id)
    .then((property) => {
      if (!property)
        res.status(404).json({ message: 'No matching property found' });
      else res.json(property);
    })
    .catch((err) =>
      res.status(500).json({ message: 'Route Error', error: err })
    );
});

module.exports = router;
