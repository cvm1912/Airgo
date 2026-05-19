const {infoController} = require('../../controller');
const airplaneRoutes = require('./airplane-router');
const airportRoutes = require('./airport-router');
const cityRoutes = require('./city-router');
const flightRoutes = require('./flight-router');
const seatRoutes = require('./seat-router');
const express = require('express');
const router = express.Router();

router.get('/info', infoController.info);
router.use('/airplanes', airplaneRoutes);
router.use('/airports', airportRoutes);
router.use('/cities', cityRoutes);
router.use('/flights', flightRoutes);
router.use('/seats', seatRoutes);

module.exports = router;
