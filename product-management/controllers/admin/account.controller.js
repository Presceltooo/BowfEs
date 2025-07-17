const md5 = require ('md5');
const Account = require("../../models/account.model")
const Role = require("../../models/role.model")
const SystemConfig = require("../../config/system.js");


// [GET] /admin/accounts
module.exports.index = async (req, res) => {
  let find = {
    $or: [{
      deleted: false
    }, {
      deletedAt: {
        $ne: null
      }
    }]
  };

  const records = await Account.find(find).select("-password -token");

  for (const record  of records) {
    const role = await Role.findOne({
      $and: [{
        _id: record.role_id
      },
      {$or: [{
        deleted: false
      }, {
        deletedAt: {
          $ne: null
        }
      }]}]
    });

    record.role = role;
  }

  res.render("admin/pages/accounts/index", {
    pageTitle: "Danh sách tài khoản",
    records: records,
  });
}


// [GET] /admin/accounts/create
module.exports.create = async (req, res) => {
  const roles = await Role.find({ deleted: false });

  res.render("admin/pages/accounts/create", {
    pageTitle: "Tạo tài khoản",
    roles: roles
  });
}

// [POST] /admin/accounts/createPost
module.exports.createPost = async (req, res) => {
  const emailExist = await Account.findOne({
    email: req.body.email,
    deleted: false
  });

  if (emailExist) {
    req.flash("error", `Email ${req.body.email} đã tồn tại`);
    res.redirect("back");
  } else {
    req.body.password = md5(req.body.password);

    const record = new Account(req.body);
    await record.save();

    res.redirect(`${SystemConfig.preFixAdmin}/accounts`);
  }
}
