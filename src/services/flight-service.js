const { FlightRepository } = require('../repositories');
const { AppError } = require('../utils/errors');
const { StatusCodes } = require('http-status-codes');

const flightRepository = new FlightRepository();

async function createFlight(data) {
    try {
        const flight = await flightRepository.create(data);
        return flight;
    } catch (err) {
        if (err.name == 'SequelizeValidationError')
            throw new AppError(err.errors.map(e => e.message).join(', '), StatusCodes.BAD_REQUEST);
        throw new AppError('Failed to create flight', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getFlights() {
    try {
        return await flightRepository.getAllFlights();
    } catch (err) {
        throw new AppError('Failed to fetch flights', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getFlight(id) {
    try {
        return await flightRepository.get(id);
    } catch (err) {
        if (err.statusCode == StatusCodes.NOT_FOUND)
            throw new AppError('Flight not found', StatusCodes.NOT_FOUND);
        throw new AppError('Failed to fetch flight', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateFlight(id, data) {
    try {
        return await flightRepository.update(id, data);
    } catch (err) {
        if (err.statusCode == StatusCodes.NOT_FOUND)
            throw new AppError('Flight not found', StatusCodes.NOT_FOUND);
        if (err.name == 'SequelizeValidationError')
            throw new AppError(err.errors.map(e => e.message).join(', '), StatusCodes.BAD_REQUEST);
        throw new AppError('Failed to update flight', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyFlight(id) {
    try {
        return await flightRepository.destroy(id);
    } catch (err) {
        if (err.statusCode == StatusCodes.NOT_FOUND)
            throw new AppError('Flight not found', StatusCodes.NOT_FOUND);
        throw new AppError('Failed to delete flight', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = { createFlight, getFlights, getFlight, updateFlight, destroyFlight };
