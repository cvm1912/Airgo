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
        if(err.name == 'SequelizeValidationError'){
            throw new AppError(err.errors.map(e => e.message).join(', '), StatusCodes.BAD_REQUEST);
        }
        if(err.name == 'TypeError'){
            throw new AppError('Cannot create a new Airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to create airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplanes(){
    try{
        const airplanes = await airplaneRepository.getAll();
        return airplanes;

    }catch(err)
    {
        if(err.name == 'SequelizeValidationError'){
            throw new AppError(err.errors.map(e => e.message).join(', '), StatusCodes.BAD_REQUEST);
        }
        if(err.name == 'TypeError'){
            throw new AppError('Cannot fetch Airplane objects', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to fetch airplanes', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createAirplane, getAirplanes
}