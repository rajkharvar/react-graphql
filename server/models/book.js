const mongoose = require('mongoose');
const mongooseSchema = mongoose.Schema;

const BookSchema = mongooseSchema({
  id: String,
  name: String,
  edition: String,
  price: Number,
  authorId: String
});

module.exports = mongoose.model('Book', BookSchema);
