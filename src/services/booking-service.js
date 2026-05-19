const { BookingRepository } = require('../repositories');
const { AppError } = require('../utils/errors');
const { StatusCodes } = require('http-status-codes');

const bookingRepository = new BookingRepository();

async function createBooking(data) {
    try {
        const booking = await bookingRepository.create(data);
        return booking;
    } catch (err) {
        if (err.name == 'SequelizeValidationError') {
            throw new AppError(err.errors.map(e => e.message).join(', '), StatusCodes.BAD_REQUEST);
        }
        if (err.name == 'TypeError') {
            throw new AppError('Cannot create a new Booking object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to create booking', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getBookings() {
    try {
        const bookings = await bookingRepository.getAll();
        return bookings;
    } catch (err) {
        if (err.name == 'TypeError') {
            throw new AppError('Cannot fetch Booking objects', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to fetch bookings', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getBooking(id) {
    try {
        const booking = await bookingRepository.get(id);
        if (!booking) throw new AppError('Booking not found for the given id', StatusCodes.NOT_FOUND);
        return booking;
    } catch (err) {
        if (err.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The Booking you requested is not found', StatusCodes.NOT_FOUND);
        }
        if (err.name == 'TypeError') {
            throw new AppError('Cannot fetch Booking object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to fetch booking', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateBooking(id, data) {
    try {
        const response = await bookingRepository.update(id, data);
        return response;
    } catch (err) {
        if (err.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The Booking you requested is not found', StatusCodes.NOT_FOUND);
        }
        if (err.name == 'SequelizeValidationError') {
            throw new AppError(err.errors.map(e => e.message).join(', '), StatusCodes.BAD_REQUEST);
        }
        if (err.name == 'TypeError') {
            throw new AppError('Cannot update Booking object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to update booking', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyBooking(id) {
    try {
        const response = await bookingRepository.destroy(id);
        return response;
    } catch (err) {
        if (err.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The Booking you requested is not found', StatusCodes.NOT_FOUND);
        }
        if (err.name == 'TypeError') {
            throw new AppError('Cannot delete Booking object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to delete booking', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = { createBooking, getBookings, getBooking, updateBooking, destroyBooking };
