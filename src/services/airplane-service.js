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

async function getAirplane(id){
    try{
        const airplane = await airplaneRepository.get(id);
        if(!airplane) throw new AppError('Airplane not found for the given id', StatusCodes.NOT_FOUND);
        return airplane;
    }catch(err){
        if(err.statusCode ==StatusCodes.NOT_FOUND)
        {
            throw new AppError('The Airplane you request is not found',StatusCodes.NOT_FOUND)
        }
         if(err.name == 'SequelizeValidationError'){
            throw new AppError(err.errors.map(e => e.message).join(', '), StatusCodes.BAD_REQUEST);
        }
        if(err.name == 'TypeError'){
            throw new AppError('Cannot fetch Airplane objects', StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw new AppError('Failed to fetch airplanes', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function updateAirplane(id){
    try{
        const response = await airplaneRepository.update(id);
         if(!airplane) throw new AppError('Airplane not found for the given id', StatusCodes.NOT_FOUND);
        return response;
    }catch(err)
    {
         if(!response){
                    throw new AppError('Not able to found the resource',StatusCodes.NOT_FOUND)
                }
            if(err.name == 'SequelizeValidationError'){
                throw new AppError(err.errors.map(e => e.message).join(', '), StatusCodes.BAD_REQUEST);
            }
            if(err.name == 'TypeError'){
                throw new AppError('Cannot delete Airplane objects', StatusCodes.INTERNAL_SERVER_ERROR);
            }
            throw new AppError('Failed to delete airplanes', StatusCodes.INTERNAL_SERVER_ERROR)

    }
}

async function destroyAirplane(id){
    try{
        const response = await airplaneRepository.destroy(id);
        return response;
    }catch(err){
            if(!response){
                    throw new AppError('Not able to found the resource',StatusCodes.NOT_FOUND)
                }
            if(err.name == 'SequelizeValidationError'){
                throw new AppError(err.errors.map(e => e.message).join(', '), StatusCodes.BAD_REQUEST);
            }
            if(err.name == 'TypeError'){
                throw new AppError('Cannot delete Airplane objects', StatusCodes.INTERNAL_SERVER_ERROR);
            }
            throw new AppError('Failed to delete airplanes', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}




module.exports = {
    createAirplane, getAirplanes, getAirplane
}