const { bookingService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /bookings
 * req-body : {
 *   "flightId": 1,
 *   "userId": 1,
 *   "status": "INITIATED",
 *   "totalCost": 4999.99
 * }
 */
async function createBooking(req, res) {
    try {
        const booking = await bookingService.createBooking({
            flightId: req.body.flightId,
            userId: req.body.userId,
            status: req.body.status,
            noofSeats: req.body.noofSeats,
            totalCost: req.body.totalCost
        });
        SuccessResponse.message = 'Successfully created a new booking';
        SuccessResponse.data = booking;
        return res.status(StatusCodes.CREATED).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while creating booking';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

/**
 * GET : /bookings
 * req-body : {}
 */
async function getAllBookings(req, res) {
    try {
        const bookings = await bookingService.getBookings();
        SuccessResponse.data = bookings;
        SuccessResponse.message = 'Successfully fetched all bookings';
        return res.status(StatusCodes.OK).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while fetching bookings';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

/**
 * GET : /bookings/:id
 * req-body : {}
 */
async function getBooking(req, res) {
    try {
        const booking = await bookingService.getBooking(req.params.id);
        SuccessResponse.data = booking;
        SuccessResponse.message = 'Successfully fetched booking';
        return res.status(StatusCodes.OK).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while fetching booking';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

async function updateBooking(req, res) {
    try {
        const response = await bookingService.updateBooking(req.params.id, req.body);
        SuccessResponse.data = response;
        SuccessResponse.message = 'Successfully updated the booking';
        return res.status(StatusCodes.OK).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while updating booking';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

async function destroyBooking(req, res) {
    try {
        const response = await bookingService.destroyBooking(req.params.id);
        SuccessResponse.data = response;
        SuccessResponse.message = 'Successfully deleted the booking';
        return res.status(StatusCodes.OK).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while deleting booking';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

module.exports = { createBooking, getAllBookings, getBooking, updateBooking, destroyBooking };
