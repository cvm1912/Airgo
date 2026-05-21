const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');

function validateCreateRequest(req, res, next) {
    const requiredFields = [
        'flightNumber', 'airplaneId', 'departureAirportId', 'arrivalAirportId',
        'departureTerminal', 'arrivalTerminal', 'departureTime', 'arrivalTime',
        'boardingGate', 'totalSeats', 'availableSeats', 'basePrice'
    ];

    for (const field of requiredFields) {
        if (!req.body[field]) {
            ErrorResponse.message = `${field} not provided in request body`;
            ErrorResponse.error = { explanation: `${field} is required to create a flight` };
            return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
        }
    }
    next();
}


function validateUpdateSeatsRequest(req, res, next) {
 
    if(!req.body.seats){
        ErrorResponse.message = 'seats not provided in request body';
        ErrorResponse.error = { explanation: 'seats is required to update seat availability' };
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
    }
    next();
}

module.exports = { validateCreateRequest, validateUpdateSeatsRequest };
