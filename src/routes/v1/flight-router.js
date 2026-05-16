const { FlightController } = require('../../controller');
const { FlightMiddleware } = require('../../middlewares');
const express = require('express');
const router = express.Router();

router.post('/', FlightMiddleware.validateCreateRequest, FlightController.createFlight);
router.get('/', FlightController.getAllFlights);
router.get('/:id', FlightController.getFlight);
router.patch('/:id', FlightController.updateFlight);
router.delete('/:id', FlightController.destroyFlight);

module.exports = router;
