const crudRepository = require('./crud-repository');
const { Booking } = require('../models');

class BookingRepository extends crudRepository {
    constructor() {
        super(Booking);
    }

    // You can write raw query here
}

module.exports = BookingRepository;
