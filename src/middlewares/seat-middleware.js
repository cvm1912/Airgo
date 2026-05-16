const { StatusCodes } = require('http-status-codes');
const { ErrorResponse } = require('../utils/common');

function validateCreateRequest(req, res, next) {
    if (!req.body.rowNumber) {
        ErrorResponse.message = 'rowNumber not provided in request body';
        ErrorResponse.error = { explanation: 'rowNumber is required to create a seat' };
        return res.status(StatusCodes.BAD_REQUEST).json({ ErrorResponse });
    }
    if (!req.body.columnNumber) {
        ErrorResponse.message = 'columnNumber not provided in request body';
        ErrorResponse.error = { explanation: 'columnNumber is required to create a seat' };
        return res.status(StatusCodes.BAD_REQUEST).json({ ErrorResponse });
    }
    if (!req.body.airplaneId) {
        ErrorResponse.message = 'airplaneId not provided in request body';
        ErrorResponse.error = { explanation: 'airplaneId is required to create a seat' };
        return res.status(StatusCodes.BAD_REQUEST).json({ ErrorResponse });
    }
    if (!req.body.class) {
        ErrorResponse.message = 'class not provided in request body';
        ErrorResponse.error = { explanation: 'class is required to create a seat' };
        return res.status(StatusCodes.BAD_REQUEST).json({ ErrorResponse });
    }
    next();
}

module.exports = { validateCreateRequest };
