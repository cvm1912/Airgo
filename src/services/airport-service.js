const {AirportRepository} = require('../repositories');
const { AppError } = require('../utils/errors');
const {StatusCodes} = require('http-status-codes')


// create a airplane repository object 
const airplaneRepository = new AirplaneRepository();

async function createAirport(data){
    try{
        const airport = await airplaneRepository.create(data);
        return airport;

    }catch(err)
    {
         if(err.name == 'SequelizeValidationError'){
            throw new AppError(err.errors.map(e => e.message).join(', '), StatusCodes.BAD_REQUEST);
        }
        if(err.name == 'TypeError'){
            throw new AppError('Cannot create a new Airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to create airplane', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllAirport() {
    try {
        const airports = await AirportRepository.getAll();
        return airports;
    } catch (err) {
        if (err.name == 'TypeError') {
            throw new AppError('Cannot fetch airports objects', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to fetch airports', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(id) {
    try {
        const airport = await AirportRepository.get(id);
        return airport;
    } catch (err) {
        if (err.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airport you requested is not found', StatusCodes.NOT_FOUND);
        }
        if (err.name == 'TypeError') {
            throw new AppError('Cannot fetch airport object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to fetch airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport(id)
{
 try{
    const response = await airplaneRepository.update(id);
    return response;

 }catch (err) {
        if (err.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airport you requested is not found', StatusCodes.NOT_FOUND);
        }
        if (err.name == 'TypeError') {
            throw new AppError('Cannot fetch airport object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to fetch airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function destroyAirport(id){
    try{
       const response = await airplaneRepository.destroy(id);
       return response;
    }catch(err)
    {
        if (err.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airport you requested is not found', StatusCodes.NOT_FOUND);
        }
        if (err.name == 'TypeError') {
            throw new AppError('Cannot fetch airport object', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to fetch airport', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

