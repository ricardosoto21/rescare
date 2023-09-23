const { Schema, model } = require('mongoose');

const TransactionSchema = new Schema({
  service: {
    type: Schema.Types.ObjectId,
    ref: 'Service',
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Completed', 'Cancelled'],
    default: 'Pending'
  },
  // Agrega aquí otros campos necesarios
});

const Transaction = model('Transaction', TransactionSchema);
module.exports = Transaction;
