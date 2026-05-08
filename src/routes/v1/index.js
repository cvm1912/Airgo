const {infoController} = require('../../controller');
const express = require('express');
const router = express.Router();

router.get('/info', infoController.info);

module.exports = router;
