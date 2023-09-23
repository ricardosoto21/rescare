const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

router.post('/', adminController.createAdmin);
router.get('/', adminController.getAllAdmins);

// Agrega más rutas para manejar otras operaciones CRUD

module.exports = router;
