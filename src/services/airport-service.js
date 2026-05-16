const { AirportRepository } = require('../repositories');
const { AppError } = require('../utils/errors');
const { StatusCodes } = require('http-status-codes');

const airportRepository = new AirportRepository();

async function createAirport(data) {
    try {
        const airport = await airportRepository.create(data);
        return airport;
    } catch (err) {
        if (err.name == 'SequelizeValidationError') {
            throw new AppError(err.errors.map(e => e.message).join(', '), StatusCodes.BAD_REQUEST);
        }
        if (err.name == 'TypeError') {
            throw new AppError('Cannot create a new Airport object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to create airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllAirports() {
    try {
        const airports = await airportRepository.getAll();
        return airports;
    } catch (err) {
        if (err.name == 'TypeError') {
            throw new AppError('Cannot fetch Airport objects', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to fetch airports', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(id) {
    try {
        const airport = await airportRepository.get(id);
        return airport;
    } catch (err) {
        if (err.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The Airport you requested is not found', StatusCodes.NOT_FOUND);
        }
        if (err.name == 'TypeError') {
            throw new AppError('Cannot fetch Airport object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to fetch airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport(id, data) {
    try {
        const response = await airportRepository.update(id, data);
        return response;
    } catch (err) {
        if (err.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The Airport you requested is not found', StatusCodes.NOT_FOUND);
        }
        if (err.name == 'SequelizeValidationError') {
            throw new AppError(err.errors.map(e => e.message).join(', '), StatusCodes.BAD_REQUEST);
        }
        if (err.name == 'TypeError') {
            throw new AppError('Cannot update Airport object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to update airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirport(id) {
    try {
        const response = await airportRepository.destroy(id);
        return response;
    } catch (err) {
        if (err.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The Airport you requested is not found', StatusCodes.NOT_FOUND);
        }
        if (err.name == 'TypeError') {
            throw new AppError('Cannot delete Airport object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to delete airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createAirport,
    getAllAirports,
    getAirport,
    updateAirport,
    destroyAirport
};
