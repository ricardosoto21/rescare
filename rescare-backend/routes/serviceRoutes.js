const express = require('express');
const serviceController = require('../controllers/serviceController');

const router = express.Router();

router.post('/', serviceController.createService);
router.get('/', serviceController.getAllServices);

// Agrega más rutas para manejar otras operaciones CRUD

module.exports = router;
