const SystemConfig = require("../../config/system.js");
const Account = require("../../models/account.model");
const Role = require("../../models/role.model");

module.exports.requireAuth = async (req, res, next) =>  {
  if (!req.cookies.token) {
    res.redirect(`${SystemConfig.preFixAdmin}/auth/login`);
  } else {
    const user = await Account.findOne({ token: req.cookies.token, deleted: false }).select("-password");
    if (!user) {
      res.redirect(`${SystemConfig.preFixAdmin}/auth/login`);
    } else {
      const role = await Role.findOne({ _id: user.role_id }).select("title permissions");

      res.locals.user = user;
      res.locals.role = role;
      next();
    }
  }
}

 