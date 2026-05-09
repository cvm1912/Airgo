const {infoController} = require('../../controller');
const airplaneRoutes = require('./airplane-router')
const express = require('express');
const router = express.Router();

router.get('/info', infoController.info);
router.use('/airplanes',airplaneRoutes);


module.exports = router;
