
const crudRepository = require('./crud-repository');
const { City } = require('../models');
class CityRepository extends crudRepository{
    constructor(){
        super(City);
    }

    // You can write raw query here 
}

module.exports = CityRepository;
