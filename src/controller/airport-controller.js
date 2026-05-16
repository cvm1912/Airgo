const { airportService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /airports
 * req-body : {
 *   "airportName": "Chhatrapati Shivaji Maharaj International Airport",
 *   "code": "BOM",
 *   "address": "Mumbai, Maharashtra",
 *   "terminalCount": 2,
 *   "runwayCount": 2,
 *   "airportType": "International",
 *   "operationalStatus": "ACTIVE",
 *   "cityId": 1
 * }
 */
async function createAirport(req, res) {
    try {
        const airport = await airportService.createAirport({
            airportName: req.body.airportName,
            code: req.body.code,
            address: req.body.address,
            terminalCount: req.body.terminalCount,
            runwayCount: req.body.runwayCount,
            airportType: req.body.airportType,
            operationalStatus: req.body.operationalStatus,
            cityId: req.body.cityId
        });
        SuccessResponse.message = 'Successfully created a new airport';
        SuccessResponse.data = airport;
        return res.status(StatusCodes.CREATED).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while creating airport';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

/**
 * GET : /airports
 * req-body : {}
 */
async function getAllAirports(req, res) {
    try {
        const airports = await airportService.getAllAirports();
        SuccessResponse.data = airports;
        SuccessResponse.message = 'Successfully fetched all airports';
        return res.status(StatusCodes.OK).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while fetching airports';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

/**
 * GET : /airports/:id
 * req-body : {}
 */
async function getAirport(req, res) {
    try {
        const airport = await airportService.getAirport(req.params.id);
        SuccessResponse.data = airport;
        SuccessResponse.message = 'Successfully fetched airport';
        return res.status(StatusCodes.OK).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while fetching airport';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

async function updateAirport(req, res) {
    try {
        const response = await airportService.updateAirport(req.params.id, req.body);
        SuccessResponse.data = response;
        SuccessResponse.message = 'Successfully updated the airport';
        return res.status(StatusCodes.OK).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while updating airport';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

async function destroyAirport(req, res) {
    try {
        const response = await airportService.destroyAirport(req.params.id);
        SuccessResponse.data = response;
        SuccessResponse.message = 'Successfully deleted the airport';
        return res.status(StatusCodes.OK).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while deleting airport';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

module.exports = {
    createAirport, getAllAirports, getAirport, updateAirport, destroyAirport
};
