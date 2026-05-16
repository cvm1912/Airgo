const { Flight } = require('../models')
const crudRepository = require('./crud-repository');
class FlightRepository extends crudRepository{
    constructor(){
        super(Flight);
    }
}

module.exports = FlightRepository;
