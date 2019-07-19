const mongoose = require('mongoose');
const mongooseSchema = mongoose.Schema;

const BookSchema = mongooseSchema({
  name: String,
  edition: String,
  price: Number,
  authorId: String
});

module.exports = mongoose.model('Book', BookSchema);
