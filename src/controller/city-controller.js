const { cityService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /cities
 * req-body : {
 *   "name": "Mumbai",
 *   "code": "BOM",
 *   "country": "India",
 *   "countryCode": "IN",
 *   "state": "Maharashtra",
 *   "timezone": "Asia/Kolkata",
 *   "latitude": 19.0760,
 *   "longitude": 72.8777,
 *   "status": true
 * }
 */
async function createCity(req, res) {
    try {
        const city = await cityService.createCity({
            name: req.body.name,
            code: req.body.code,
            country: req.body.country,
            countryCode: req.body.countryCode,
            state: req.body.state,
            timezone: req.body.timezone,
            latitude: req.body.latitude,
            longitude: req.body.longitude,
            status: req.body.status
        });
        SuccessResponse.message = 'Successfully created a new city';
        SuccessResponse.data = city;
        return res.status(StatusCodes.CREATED).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while creating city';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

/**
 * GET : /cities
 * req-body : {}
 */
async function getAllCities(req, res) {
    try {
        const cities = await cityService.getAllCities();
        SuccessResponse.data = cities;
        SuccessResponse.message = 'Successfully fetched all cities';
        return res.status(StatusCodes.OK).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while fetching cities';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

/**
 * GET : /cities/:id
 * req-body : {}
 */
async function getCity(req, res) {
    try {
        const city = await cityService.getCity(req.params.id);
        SuccessResponse.data = city;
        SuccessResponse.message = 'Successfully fetched city';
        return res.status(StatusCodes.OK).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while fetching city';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

async function updateCity(req, res) {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        SuccessResponse.data = response;
        SuccessResponse.message = 'Successfully updated the city';
        return res.status(StatusCodes.OK).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while updating city';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

async function destroyCity(req, res) {
    try {
        const response = await cityService.destroyCity(req.params.id);
        SuccessResponse.data = response;
        SuccessResponse.message = 'Successfully deleted the city';
        return res.status(StatusCodes.OK).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while deleting city';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

module.exports = {
    createCity, getAllCities, getCity, updateCity, destroyCity
};
