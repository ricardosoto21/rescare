const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Provider',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  serviceQualityRating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  punctualityRating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comments: String,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;

