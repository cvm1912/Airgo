const {infoController} = require('../../controller');
const airplaneRoutes = require('./airplane-router');
const airportRoutes = require('./airport-router');
const express = require('express');
const router = express.Router();

router.get('/info', infoController.info);
router.use('/airplanes', airplaneRoutes);
router.use('/airports', airportRoutes);

module.exports = router;
