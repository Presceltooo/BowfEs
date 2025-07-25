const md5 = require('md5');
const Account = require("../../models/account.model")
const SystemConfig = require("../../config/system.js");


// [GET] /admin/auth/login
module.exports.login = async (req, res) => {
  const user = await Account.findOne({ token: req.cookies.token, deleted: false });
  if (user) {
    res.redirect(`${SystemConfig.preFixAdmin}/dashboard`);
  } else {
    res.render("admin/pages/auth/login", {
      pageTitle: "Trang đăng nhập"
    });
  }
}

// [POST] /admin/auth/login
module.exports.loginPost = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await Account.findOne({
    email: email,
    deleted: false
  });

  if (!user) {
    req.flash("error", "Email này không tồn tại!");
    res.redirect("back");
    return;
  }

  if (md5(password) != user.password) {
    req.flash("error", "Mật khẩu không chính xác!");
    res.redirect("back");
    return;
  }

  if (user.status == "inactive") {
    req.flash("error", "Tài khoản đã bị khóa!");
    res.redirect("back");
    return;
  }

  res.cookie("token", user.token);
  res.redirect(`${SystemConfig.preFixAdmin}/dashboard`);
}

// [GET] /admin/auth/logout
module.exports.logout = async (req, res) => {
  res.clearCookie("token");
  res.redirect(`${SystemConfig.preFixAdmin}/auth/login`);
}
