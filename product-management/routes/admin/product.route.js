const express = require('express');
const multer = require('multer');
const router = express.Router();
const storageMulter = require("../../helpers/storageMulter");
const upload = multer({
  storage: storageMulter()
});

const controller = require("../../controllers/admin/product.controller");

router.get('/', controller.index);

router.patch('/change-status/:status/:id', controller.changeStatus);
// :status and :id are router động

router.patch('/change-multi', controller.changeMulti);

router.delete('/delete/:id', controller.deleteItem);

router.patch('/restore/:id', controller.restoreItem);

router.get('/create', controller.create);

router.post('/create', upload.single("thumbnail"), controller.createPost); // "thumbnail" là tên trường sẽ ddcc lưu

module.exports = router;