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
    async updateRemainingSeats(flightId, seats, dec = true){
        try{
            const flight = await Flight.findByPk(flightId);
            if(!flight) throw new Error('Flight not found');
            if(dec){
                await flight.decrement('availableSeats', { by: seats });
            } else {
                await flight.increment('availableSeats', { by: seats });
            }
            await flight.reload();
            return flight;
        }catch(err){
            throw err;
        }
    }
}

module.exports = FlightRepository;
