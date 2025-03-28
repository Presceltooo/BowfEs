const Product = require("../../models/product.model");

module.exports.index = async (req, res) => {
  const products = await Product.find({
    status: "active",
    deleted: false
  }).sort({ position: "asc"});

  // map() sẽ tạo ra 1 mảng mới từ mảng cũ và có tướng tác với từng phần tử trong mảng cũ
  const newProducts = products.map((item) => {
    item.newPrice = (item.price * (1-item.discountPercentage/100)).toFixed(2);
    return item;
  });
  console.log(newProducts);

  res.render("client/pages/products/index", {
    pageTitle: "Trang danh sách sản phẩm",
    products: newProducts
  });
}