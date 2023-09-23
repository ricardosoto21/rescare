const express = require('express');
const messageController = require('../controllers/messageController');

const router = express.Router();

router.post('/', messageController.createMessage);
router.get('/:userId', messageController.getMessagesByUser);

// Agrega más rutas para manejar otras operaciones si es necesario

module.exports = router;
