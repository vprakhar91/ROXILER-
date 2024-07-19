const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  product_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  dateOfSale: { type: Date, required: true },
  price: { type: Number, required: true },
  isSold: { type: Boolean, required: true },
  category: { type: String },
  title: { type: String },
  description: { type: String },
});

module.exports = mongoose.model('Transaction', transactionSchema);
