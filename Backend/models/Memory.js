const mongoose = require('mongoose');

const MemorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  creator: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  productImage: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Memory = mongoose.model('memory', MemorySchema);