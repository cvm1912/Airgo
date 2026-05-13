const {Airport} = require('../models')
const crudRepository = require('./crud-repository');
class AirportRepository extends crudRepository{
    constructor(){
        super(Airport);
    }

    // You can write raw query here 
}

module.exports = AirportRepository;
