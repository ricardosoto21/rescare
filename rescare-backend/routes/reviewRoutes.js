const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router();

router.post('/', reviewController.createReview);
router.get('/', reviewController.getAllReviews);

// Agrega más rutas para manejar otras operaciones CRUD

module.exports = router;
