const Role = require("../../models/role.model")
const SystemConfig = require("../../config/system.js");


// [GET] /admin/roles
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

  const records = await Role.find(find);

  res.render("admin/pages/roles/index", {
    pageTitle: "Nhóm quyền",
    records: records,
  });
}

// [GET] /admin/roles/create
module.exports.create = async (req, res) => {
  res.render("admin/pages/roles/create", {
    pageTitle: "Tạo nhóm quyền",
  });
}

// [POST] /admin/roles/create
module.exports.createPost = async (req, res) => {
  const record = new Role(req.body);

  await record.save();

  res.redirect(`${SystemConfig.preFixAdmin}/roles`);
}