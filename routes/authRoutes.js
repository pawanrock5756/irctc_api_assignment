const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

// Authentication routes
router.post('/register', register);  // User registration
router.post('/login', login);        // User login

module.exports = router;
