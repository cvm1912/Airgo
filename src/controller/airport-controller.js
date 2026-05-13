const { airportService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

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
        return res.status(StatusCodes.CREATED).json({
            ...SuccessResponse,
            message: 'Successfully created a new airport',
            data: airport
        });
    } catch (err) {
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            ...ErrorResponse,
            message: err.message || 'Something went wrong while creating airport',
            error: { explanation: err.explanation || err.message }
        });
    }
}

async function getAllAirports(req, res) {
    try {
        const airports = await airportService.getAllAirport();
        return res.status(StatusCodes.OK).json({
            ...SuccessResponse,
            message: 'Successfully fetched all airports',
            data: airports
        });
    } catch (err) {
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            ...ErrorResponse,
            message: err.message || 'Something went wrong while fetching airports',
            error: { explanation: err.explanation || err.message }
        });
    }
}

async function getAirport(req, res) {
    try {
        const airport = await airportService.getAirport(req.params.id);
        return res.status(StatusCodes.OK).json({
            ...SuccessResponse,
            message: 'Successfully fetched airport',
            data: airport
        });
    } catch (err) {
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            ...ErrorResponse,
            message: err.message || 'Something went wrong while fetching airport',
            error: { explanation: err.explanation || err.message }
        });
    }
}

async function updateAirport(req, res) {
    try {
        const response = await airportService.updateAirport(req.params.id, req.body);
        return res.status(StatusCodes.OK).json({
            ...SuccessResponse,
            message: 'Successfully updated the airport',
            data: response
        });
    } catch (err) {
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            ...ErrorResponse,
            message: err.message || 'Something went wrong while updating airport',
            error: { explanation: err.explanation || err.message }
        });
    }
}

async function destroyAirport(req, res) {
    try {
        const response = await airportService.destroyAirport(req.params.id);
        return res.status(StatusCodes.OK).json({
            ...SuccessResponse,
            message: 'Successfully deleted the airport',
            data: response
        });
    } catch (err) {
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
            ...ErrorResponse,
            message: err.message || 'Something went wrong while deleting airport',
            error: { explanation: err.explanation || err.message }
        });
    }
}

module.exports = {
    createAirport, getAllAirports, getAirport, updateAirport, destroyAirport
};
