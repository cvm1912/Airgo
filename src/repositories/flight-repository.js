const { Flight, Airplane, Airport } = require('../models');
const crudRepository = require('./crud-repository');
class FlightRepository extends crudRepository{
    constructor(){
        super(Flight);
    }

    async getAllFlights(){
        try{
            const response = await Flight.findAll({
                include: [
                    { model: Airplane, 
                        as: 'airplane',                      
                    
                    },
                    { model: Airport, as: 'departureAirport' },
                    { model: Airport, as: 'arrivalAirport' }
                ]
            });
            return response;
        }catch(err){
            throw err;
        }
    }
}


module.exports = FlightRepository;
