const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');

class User extends Model {}
User.init({
  username: { type: DataTypes.STRING, unique: true, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  passwordHash: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.ENUM('admin', 'user'), defaultValue: 'user' }
}, { sequelize, modelName: 'User' });

class Train extends Model {}
Train.init({
  trainNumber: { type: DataTypes.STRING, unique: true, allowNull: false },
  source: { type: DataTypes.STRING, allowNull: false },
  destination: { type: DataTypes.STRING, allowNull: false },
  totalSeats: { type: DataTypes.INTEGER, allowNull: false },
  availableSeats: { type: DataTypes.INTEGER, allowNull: false }
}, { sequelize, modelName: 'Train' });

class Booking extends Model {}
Booking.init({
  seatNumber: { type: DataTypes.INTEGER, allowNull: false },
  bookingDate: { type: DataTypes.DATE, defaultValue: Sequelize.NOW }
}, { sequelize, modelName: 'Booking' });

User.hasMany(Booking);
Booking.belongsTo(User);
Train.hasMany(Booking);
Booking.belongsTo(Train);

sequelize.sync();
module.exports = { User, Train, Booking };
