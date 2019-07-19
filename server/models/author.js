const mongoose = require('mongoose');
const mongooseSchema = mongoose.Schema;

const AuthorSchema = mongooseSchema({
  id: String,
  name: String,
  age: Number
});

module.exports = mongoose.model('Author', AuthorSchema);
