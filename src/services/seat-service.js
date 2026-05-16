const { SeatRepository } = require('../repositories');
const { AppError } = require('../utils/errors');
const { StatusCodes } = require('http-status-codes');

const seatRepository = new SeatRepository();

async function createSeat(data) {
    try {
        const seat = await seatRepository.create(data);
        return seat;
    } catch (err) {
        if (err.name == 'SequelizeValidationError') {
            throw new AppError(err.errors.map(e => e.message).join(', '), StatusCodes.BAD_REQUEST);
        }
        if (err.name == 'TypeError') {
            throw new AppError('Cannot create a new Seat object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to create seat', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getSeats() {
    try {
        const seats = await seatRepository.getAll();
        return seats;
    } catch (err) {
        if (err.name == 'SequelizeValidationError') {
            throw new AppError(err.errors.map(e => e.message).join(', '), StatusCodes.BAD_REQUEST);
        }
        if (err.name == 'TypeError') {
            throw new AppError('Cannot fetch Seat objects', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to fetch seats', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getSeat(id) {
    try {
        const seat = await seatRepository.get(id);
        if (!seat) throw new AppError('Seat not found for the given id', StatusCodes.NOT_FOUND);
        return seat;
    } catch (err) {
        if (err.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The Seat you requested is not found', StatusCodes.NOT_FOUND);
        }
        if (err.name == 'SequelizeValidationError') {
            throw new AppError(err.errors.map(e => e.message).join(', '), StatusCodes.BAD_REQUEST);
        }
        if (err.name == 'TypeError') {
            throw new AppError('Cannot fetch Seat object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to fetch seat', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateSeat(id, data) {
    try {
        const response = await seatRepository.update(id, data);
        return response;
    } catch (err) {
        if (err.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The Seat you requested is not found', StatusCodes.NOT_FOUND);
        }
        if (err.name == 'SequelizeValidationError') {
            throw new AppError(err.errors.map(e => e.message).join(', '), StatusCodes.BAD_REQUEST);
        }
        if (err.name == 'TypeError') {
            throw new AppError('Cannot update Seat object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to update seat', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroySeat(id) {
    try {
        const response = await seatRepository.destroy(id);
        return response;
    } catch (err) {
        if (err.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The Seat you requested is not found', StatusCodes.NOT_FOUND);
        }
        if (err.name == 'SequelizeValidationError') {
            throw new AppError(err.errors.map(e => e.message).join(', '), StatusCodes.BAD_REQUEST);
        }
        if (err.name == 'TypeError') {
            throw new AppError('Cannot delete Seat object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to delete seat', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = { createSeat, getSeats, getSeat, updateSeat, destroySeat };
