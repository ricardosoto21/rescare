const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
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
  certification: {
    titleCertificate: String,
    superintendencyRegistration: String,
    backgroundCertificate: String,
    idCardPhotos: [String],
  },
  speciality: String,
  servicesProvided: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
  }],
  reviewsReceived: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
  }],
});

const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;
