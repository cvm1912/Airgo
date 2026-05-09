// its a simple crud repository -
// you can add a plane, remove a plane, delete a plane and update it.

const crudRepository = require('./crud-repository');
const { Airplane } = require('../models');
class AirplaneRepository extends crudRepository{
    constructor(){
        super(Airplane);
    }

    // You can write raw query here 
}

module.exports = AirplaneRepository;

