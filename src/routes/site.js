const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

//trang không có sự liên hệ vd: trang chủ, thông tin

router.get('/search', siteController.search);
router.get('/infor', siteController.infor);


router.get('/', siteController.index);

module.exports = router;