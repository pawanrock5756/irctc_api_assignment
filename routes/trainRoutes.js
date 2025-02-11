const express = require('express');
const { addTrain } = require('../controllers/trainController');
const { checkApiKey } = require('../middlewares/apiKeyMiddleware');

const router = express.Router();

// Admin-only route for adding a train (protected by API key)
router.post('/add', checkApiKey, addTrain);

module.exports = router;
