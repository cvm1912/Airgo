const { seatService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /seats
 * req-body : {
 *   "rowNumber": "5",
 *   "columnNumber": "A",
 *   "airplaneId": 1,
 *   "class": "economy"
 * }
 */
async function createSeat(req, res) {
    try {
        const seat = await seatService.createSeat({
            rowNumber: req.body.rowNumber,
            columnNumber: req.body.columnNumber,
            airplaneId: req.body.airplaneId,
            class: req.body.class
        });
        SuccessResponse.message = 'Successfully created a new seat';
        SuccessResponse.data = seat;
        return res.status(StatusCodes.CREATED).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while creating seat';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

/**
 * GET : /seats
 * req-body : {}
 */
async function getAllSeats(req, res) {
    try {
        const seats = await seatService.getSeats();
        SuccessResponse.data = seats;
        SuccessResponse.message = 'Successfully fetched all seats';
        return res.status(StatusCodes.OK).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while fetching seats';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

/**
 * GET : /seats/:id
 * req-body : {}
 */
async function getSeat(req, res) {
    try {
        const seat = await seatService.getSeat(req.params.id);
        SuccessResponse.data = seat;
        SuccessResponse.message = 'Successfully fetched seat';
        return res.status(StatusCodes.OK).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while fetching seat';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

async function updateSeat(req, res) {
    try {
        const response = await seatService.updateSeat(req.params.id, req.body);
        SuccessResponse.data = response;
        SuccessResponse.message = 'Successfully updated the seat';
        return res.status(StatusCodes.OK).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while updating seat';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

async function destroySeat(req, res) {
    try {
        const response = await seatService.destroySeat(req.params.id);
        SuccessResponse.data = response;
        SuccessResponse.message = 'Successfully deleted the seat';
        return res.status(StatusCodes.OK).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while deleting seat';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

module.exports = { createSeat, getAllSeats, getSeat, updateSeat, destroySeat };
