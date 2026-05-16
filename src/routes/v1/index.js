const {infoController} = require('../../controller');
const airplaneRoutes = require('./airplane-router');
const airportRoutes = require('./airport-router');
const flightRoutes = require('./flight-router');
const express = require('express');
const router = express.Router();

const cityRoutes = require('./city-router');

router.get('/info', infoController.info);
router.use('/airplanes', airplaneRoutes);
router.use('/airports', airportRoutes);
router.use('/flights', flightRoutes);
router.use('/cities', cityRoutes);

module.exports = router;
