const { CityRepository } = require('../repositories');
const { AppError } = require('../utils/errors');
const { StatusCodes } = require('http-status-codes');

const cityRepository = new CityRepository();

async function createCity(data) {
    try {
        const city = await cityRepository.create(data);
        return city;
    } catch (err) {
        if (err.name == 'SequelizeValidationError') {
            throw new AppError(err.errors.map(e => e.message).join(', '), StatusCodes.BAD_REQUEST);
        }
        if (err.name == 'TypeError') {
            throw new AppError('Cannot create a new City object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to create city', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllCities() {
    try {
        const cities = await cityRepository.getAll();
        return cities;
    } catch (err) {
        if (err.name == 'TypeError') {
            throw new AppError('Cannot fetch City objects', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to fetch cities', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getCity(id) {
    try {
        const city = await cityRepository.get(id);
        return city;
    } catch (err) {
        if (err.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The City you requested is not found', StatusCodes.NOT_FOUND);
        }
        if (err.name == 'TypeError') {
            throw new AppError('Cannot fetch City object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to fetch city', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateCity(id, data) {
    try {
        const city = await cityRepository.update(id, data);
        return city;
    } catch (err) {
        if (err.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The City you requested is not found', StatusCodes.NOT_FOUND);
        }
        if (err.name == 'SequelizeValidationError') {
            throw new AppError(err.errors.map(e => e.message).join(', '), StatusCodes.BAD_REQUEST);
        }
        if (err.name == 'TypeError') {
            throw new AppError('Cannot update City object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to update city', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyCity(id) {
    try {
        const response = await cityRepository.destroy(id);
        return response;
    } catch (err) {
        if (err.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The City you requested is not found', StatusCodes.NOT_FOUND);
        }
        if (err.name == 'TypeError') {
            throw new AppError('Cannot delete City object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to delete city', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createCity,
    getAllCities,
    getCity,
    updateCity,
    destroyCity
};
