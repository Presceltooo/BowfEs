const categoryMiddleware = require("../../middlewares/client/category.middleware");
const cartMiddleware = require("../../middlewares/client/cart.middleware");

const homeRoutes = require("./home.route");
const productRoutes = require("./product.route");
const articleRoutes = require("./article.route");
const searchRoutes = require("./search.route");
const cartRoutes = require("./cart.route");
const checkoutRoutes = require("./checkout.route");

module.exports = (app) => {
  app.use(categoryMiddleware.categoryProducts);
  app.use(categoryMiddleware.categoryArticles);
  // Middleware luôn sẵn để lấy dữ liệu category
  app.use(cartMiddleware.cartId);

  app.use('/', homeRoutes);

  app.use('/products', productRoutes);
  // use vì có get ở trong product.route.js, và productRoutes là đang dùng thẳng hàm => tiện

  app.use('/articles', articleRoutes);

  app.use('/search', searchRoutes);

  app.use('/cart', cartRoutes);

  app.use('/checkout', checkoutRoutes);
}