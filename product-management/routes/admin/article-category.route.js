const express = require('express');
const multer = require('multer');
const router = express.Router();

const upload = multer();

const controller = require("../../controllers/admin/article-category.controller");

const validate = require("../../validates/admin/article-category.validate");

const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware");

router.get('/', controller.index);

router.patch('/change-status/:status/:id', controller.changeStatus);
// :status and :id are router động

router.patch('/change-multi', controller.changeMulti);

router.delete('/delete/:id', controller.deleteItem);

router.patch('/restore/:id', controller.restoreItem);

router.get('/create', controller.create);

router.post(
  '/create',
  upload.single("thumbnail"),
  uploadCloud.upload,
  validate.createPost,
  controller.createPost);

router.get('/edit/:id', controller.edit);

router.patch(
  '/edit/:id',
  upload.single("thumbnail"),
  uploadCloud.upload,
  validate.createPost,
  controller.editPatch);

router.get('/detail/:id', controller.detail);

module.exports = router;