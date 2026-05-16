const { Flight, Airplane, Airport, Sequelize } = require('../models');
const crudRepository = require('./crud-repository');
class FlightRepository extends crudRepository{
    constructor(){
        super(Flight);
    }

    async getAllFlights(){
        try{
            const response = await Flight.findAll({
                include: [{
                    model: Airplane,
                    attributes: ['airplaneName', 'modelNumber'],
                    where: { modelNumber: 'Boeing 747' }
                },{
                    model: Airport,
                    required: true,
                    on: {
                        col1: Sequelize.where(
                            Sequelize.col('Flight.departureAirportId'),
                            '=',
                            Sequelize.col('Airport.id')
                        )
                    }
                }]
            });
            return response;
        }catch(err){
            throw err;
        }
    }
}

module.exports = FlightRepository;
