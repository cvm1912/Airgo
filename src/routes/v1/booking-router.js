const { BookingController } = require('../../controller');
const express = require('express');
const router = express.Router();

router.post('/', BookingController.createBooking);
router.get('/', BookingController.getAllBookings);
router.get('/:id', BookingController.getBooking);
router.patch('/:id', BookingController.updateBooking);
router.delete('/:id', BookingController.destroyBooking);

module.exports = router;
