const { SeatController } = require('../../controller');
const { SeatMiddleware } = require('../../middlewares');
const express = require('express');
const router = express.Router();

router.post('/', SeatMiddleware.validateCreateRequest, SeatController.createSeat);
router.get('/', SeatController.getAllSeats);
router.get('/:id', SeatController.getSeat);
router.patch('/:id', SeatController.updateSeat);
router.delete('/:id', SeatController.destroySeat);

module.exports = router;
