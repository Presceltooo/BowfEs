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
  status: String,
  deletedAt: Date
});

const Product = mongoose.model('Product', productSchema, "products");
// Model là 1 bản ghi: gồm tên model, schema và tên collection

module.exports = Product;