const express = require('express');
const { bookSeat } = require('../controllers/bookingController');
const { authenticate } = require('../middlewares/authMiddleware');

const router = express.Router();

// User-only route for booking a seat (protected by JWT)
router.post('/create', authenticate, bookSeat);

module.exports = router;
