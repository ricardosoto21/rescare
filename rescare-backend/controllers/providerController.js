const Provider = require('../models/provider');
const Service = require('../models/service');

exports.createProvider = async (req, res) => {
  try {
    const provider = new Provider(req.body);
    await provider.save();
    res.status(201).json(provider);
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

exports.getProviderById = async (req, res) => {
  try {
    const provider = await Provider.findById(req.params.id);
    res.status(200).json(provider);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProvider = async (req, res) => {
  try {
    const provider = await Provider.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(provider);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteProvider = async (req, res) => {
  try {
    await Provider.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Provider deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getServicesByProvider = async (req, res) => {
  try {
    const services = await Service.find({ providerId: req.params.providerId });
    res.status(200).json(services);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
