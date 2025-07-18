const systemConfig = require("../../config/system");

const dashboardRoutes = require("./dashboard.route");
const productRoutes = require("./product.route");
const productCategoryRoutes = require("./product-category.route");
const roleRoutes = require("./role.route");
const accountRoutes = require("./account.route")
const authRoutes = require("./auth.route")


module.exports = (app) => {
  const PATCH_ADMIN = systemConfig.preFixAdmin;

  app.use(PATCH_ADMIN + '/dashboard', dashboardRoutes);

  app.use(PATCH_ADMIN + '/products', productRoutes);

  app.use(PATCH_ADMIN + '/products-category', productCategoryRoutes);

  app.use(PATCH_ADMIN + '/roles', roleRoutes);

  app.use(PATCH_ADMIN + '/accounts', accountRoutes);

  app.use(PATCH_ADMIN + '/auth', authRoutes);
}