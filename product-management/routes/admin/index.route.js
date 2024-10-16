const systemConfig = require("../../config/system");
const dashboardRoutes = require("./dashboard.route");

module.exports = (app) => {
  const PATCH_ADMIN = systemConfig.preFixAdmin;


  app.use(PATCH_ADMIN + '/dashboard', dashboardRoutes);
}