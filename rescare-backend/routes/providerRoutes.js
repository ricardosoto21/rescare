const express = require('express');
const providerController = require('../controllers/providerController');

const router = express.Router();

router.post('/', providerController.createProvider);
router.get('/', providerController.getAllProviders);

// Agrega más rutas para manejar otras operaciones CRUD

module.exports = router;
