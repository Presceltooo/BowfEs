const mongoose = require('mongoose');

// Schema như là 1 khung
const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  thumbnail: String,
  deleted: Boolean,
  position: Number,
  status: String
});

const Product = mongoose.model('Product', productSchema, "products");
// Model là 1 bản ghi: gồm tên model, schema và tên collection
// học đến 1h40p

module.exports = Product;