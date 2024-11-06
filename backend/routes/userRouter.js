// backend/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Ensure User model path is correct

router.post('/register', async (req, res) => {
  console.log(req.body); // Logs incoming data to console
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send({ message: 'User registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: 'Registration failed' });
  }
});



module.exports = router;
