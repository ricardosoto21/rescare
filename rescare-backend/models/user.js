const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rut: {
    type: String,
    required: true,
    unique: true,
  },
  birthdate: {
    type: Date,
    required: true,
  },
  address: {
    region: String,
    comuna: String,
    city: String,
    detail: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  servicesTaken: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
  }],
  reviewsGiven: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
  }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
