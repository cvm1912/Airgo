const { AirportController } = require('../../controller');
const express = require('express');
const router = express.Router();

router.post('/', AirportController.createAirport);
router.get('/', AirportController.getAllAirports);
router.get('/:id', AirportController.getAirport);
router.patch('/:id', AirportController.updateAirport);
router.delete('/:id', AirportController.destroyAirport);

module.exports = router;
