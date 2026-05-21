const { flightService } = require('../services');
const { StatusCodes } = require('http-status-codes');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

/**
 * POST : /flights
 * req-body : {
 *   "flightNumber": "AI-101",
 *   "airplaneId": 1,
 *   "departureAirportId": 1,
 *   "arrivalAirportId": 2,
 *   "departureTerminal": "T2",
 *   "arrivalTerminal": "T1",
 *   "departureTime": "2026-06-01T06:00:00.000Z",
 *   "arrivalTime": "2026-06-01T08:30:00.000Z",
 *   "boardingGate": "G12",
 *   "totalSeats": 180,
 *   "availableSeats": 180,
 *   "basePrice": 4999.99,
 *   "baggageAllowance": "15kg",
 *   "mealAvailable": true,
 *   "wifiAvailable": false,
 *   "flightStatus": "SCHEDULED",
 *   "journeyDuration": 150,
 *   "flightType": "Domestic"
 * }
 */
async function createFlight(req, res) {
    try {
        const flight = await flightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            departureTerminal: req.body.departureTerminal,
            arrivalTerminal: req.body.arrivalTerminal,
            departureTime: req.body.departureTime,
            arrivalTime: req.body.arrivalTime,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats,
            availableSeats: req.body.availableSeats,
            basePrice: req.body.basePrice,
            baggageAllowance: req.body.baggageAllowance,
            mealAvailable: req.body.mealAvailable,
            wifiAvailable: req.body.wifiAvailable,
            flightStatus: req.body.flightStatus,
            journeyDuration: req.body.journeyDuration,
            flightType: req.body.flightType
        });
        SuccessResponse.message = 'Successfully created a new flight';
        SuccessResponse.data = flight;
        return res.status(StatusCodes.CREATED).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while creating flight';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

async function getAllFlights(req, res) {
    try {
        const flights = await flightService.getFlights();
        SuccessResponse.message = 'Successfully fetched all flights';
        SuccessResponse.data = flights;
        return res.status(StatusCodes.OK).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while fetching flights';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

async function getFlight(req, res) {
    try {
        const flight = await flightService.getFlight(req.params.id);
        SuccessResponse.message = 'Successfully fetched flight';
        SuccessResponse.data = flight;
        return res.status(StatusCodes.OK).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while fetching flight';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

async function updateFlight(req, res) {
    try {
        const flight = await flightService.updateFlight(req.params.id, req.body);
        SuccessResponse.message = 'Successfully updated flight';
        SuccessResponse.data = flight;
        return res.status(StatusCodes.OK).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while updating flight';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

async function destroyFlight(req, res) {
    try {
        const flight = await flightService.destroyFlight(req.params.id);
        SuccessResponse.message = 'Successfully deleted flight';
        SuccessResponse.data = flight;
        return res.status(StatusCodes.OK).json({ SuccessResponse });
    } catch (err) {
        ErrorResponse.message = err.message || 'Something went wrong while deleting flight';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });
    }
}

async function updateSeats(req, res) {
    try{
        const response = await flightService.updateSeats({
            flightId: parseInt(req.params.id),
            seats: req.body.seats,
            dec: req.body.dec
        });
        SuccessResponse.message = 'Successfully updated seat availability';
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json({ SuccessResponse });
    }catch(err){
        ErrorResponse.message = err.message || 'Something went wrong while updating seat availability';
        ErrorResponse.error = { explanation: err.explanation || err.message };
        return res.status(err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({ ErrorResponse });

    }
}

module.exports = { createFlight, getAllFlights, getFlight, updateFlight, destroyFlight, updateSeats };
