// routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);

// Agrega más rutas para manejar otras operaciones CRUD

module.exports = router;
