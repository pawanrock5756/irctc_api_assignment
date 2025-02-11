const { Booking, Train } = require('../models/models');

exports.bookSeat = async (req, res) => {
  const { trainId, seatNumber } = req.body;
  const userId = req.user.id;

  try {
    const train = await Train.findByPk(trainId);
    if (!train || train.availableSeats <= 0) {
      return res.status(400).json({ error: 'No seats available' });
    }

    await train.decrement('availableSeats');
    const booking = await Booking.create({ userId, trainId, seatNumber });
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: 'Error booking seat' });
  }
};
