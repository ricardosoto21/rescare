const Message = require('../models/message');

exports.createMessage = async (req, res) => {
  try {
    const newMessage = await Message.create(req.body);
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMessagesByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const messages = await Message.find({ $or: [{ sender: userId }, { recipient: userId }] }).sort('timestamp');
    res.status(200).json(messages);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Agrega más métodos para manejar otras operaciones si es necesario
