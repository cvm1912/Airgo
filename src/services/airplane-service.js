const {AirplaneRepository} = require('../repositories');
const { AppError } = require('../utils/errors');
const {StatusCodes} = require('http-status-codes')

// create a airplane repository object 
const airplaneRepository = new AirplaneRepository();


async function createAirplane(data){
    try{
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }catch(err){
        if(err.name=='TypeError'){
            throw new AppError('Cannot create a new Airplane object',StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw err;
    }
}

module.exports = {
    createAirplane
}