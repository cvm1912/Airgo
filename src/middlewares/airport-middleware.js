const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');

function validateCreateRequest(req, res, next) {
    if (!req.body.airportName) {
        ErrorResponse.message = 'airportName not provided in request body';
        ErrorResponse.error = { explanation: 'airportName is required to create an airport' };
        return res.status(StatusCodes.BAD_REQUEST).json({ ErrorResponse });
    }
    if (!req.body.code) {
        ErrorResponse.message = 'code not provided in request body';
        ErrorResponse.error = { explanation: 'code is required to create an airport' };
        return res.status(StatusCodes.BAD_REQUEST).json({ ErrorResponse });
    }
    if (!req.body.cityId) {
        ErrorResponse.message = 'cityId not provided in request body';
        ErrorResponse.error = { explanation: 'cityId is required to associate airport with a city' };
        return res.status(StatusCodes.BAD_REQUEST).json({ ErrorResponse });
    }
    next();
}

module.exports = { validateCreateRequest };
