const { Train } = require('../models/models');

exports.addTrain = async (req, res) => {
  const { trainNumber, source, destination, totalSeats } = req.body;

  try {
    const train = await Train.create({ trainNumber, source, destination, totalSeats, availableSeats: totalSeats });
    res.status(201).json(train);
  } catch (error) {
    res.status(500).json({ error: 'Error adding train' });
  }
};
