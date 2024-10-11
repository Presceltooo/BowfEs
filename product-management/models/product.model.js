const mongoose = require('mongoose');

// Schema như là 1 khung
const productSchema = new Schema({

  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  stock: Number,
  thumbnail: String,
});

const Product = mongoose.model('Product', productSchema, "products");
// Model là 1 bản ghi: gồm tên model, schema và tên collection

module.exports = Product;