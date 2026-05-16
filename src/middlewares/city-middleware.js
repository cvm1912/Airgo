const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');

function validateCreateRequest(req, res, next) {
    if (!req.body.name) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            ...ErrorResponse,
            message: 'name not provided in request body',
            error: { explanation: 'name is required to create a city' }
        });
    }
    if (!req.body.country) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            ...ErrorResponse,
            message: 'country not provided in request body',
            error: { explanation: 'country is required to create a city' }
        });
    }
    next();
}

module.exports = { validateCreateRequest };
