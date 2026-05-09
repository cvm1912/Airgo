const {AirplaneRepository} = require('../repositories');

// create a airplane repository object 
const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try{
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }catch(err){
        throw err;
    }
}

module.exports = {
    createAirplane
}