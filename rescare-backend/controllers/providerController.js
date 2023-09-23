const Provider = require('../models/provider');

exports.createProvider = async (req, res) => {
  try {
    const newProvider = await Provider.create(req.body);
    res.status(201).json(newProvider);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllProviders = async (req, res) => {
  try {
    const providers = await Provider.find();
    res.status(200).json(providers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Agrega más métodos para manejar otras operaciones CRUD
