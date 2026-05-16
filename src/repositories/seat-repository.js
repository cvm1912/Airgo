const crudRepository = require('./crud-repository');
const { Seat } = require('../models');

class SeatRepository extends crudRepository {
    constructor() {
        super(Seat);
    }

    

    // You can write raw query here
}

module.exports = SeatRepository;
