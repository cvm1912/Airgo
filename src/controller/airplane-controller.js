const { airplaneService } = require('../services');
const {StatusCodes} = require('http-status-codes')
const {
    SuccessResponse,ErrorResponse
} = require('../utils/common');
/**
 * POST : /airplanes
 * req-body : {
  "airplaneName": "Sky Falcon",
  "modelNumber": "A320-200",
  "manufacturer": "Airbus",
  "registrationNumber": "VT-AXR",
  "capacity": 180,
  "economySeats": 150,
  "businessSeats": 24,
  "firstClassSeats": 6,
  "fuelCapacity": 24210,
  "maxSpeed": 871,
  "rangeKm": 6150,
  "status": "ACTIVE",
  "airlineId": 101,
  "manufacturedYear": "2019-01-01",
  "lastMaintenanceDate": "2026-04-15"
}
 */
async function createAirplane(req,res){
    try{
        const airplane = await airplaneService.createAirplane({
            airplaneName:req.body.airplaneName,
            modelNumber: req.body.modelNumber,
            manufacturer:req.body.manufacturer,
            registrationNumber:req.body.registrationNumber,
            capacity:req.body.capacity,
            economySeats:req.body.economySeats,
            businessSeats:req.body.businessSeats,
            firstClassSeats:req.body.firstClassSeats,
            fuelCapacity:req.body.fuelCapacity,
            maxSpeed:req.body.maxSpeed,
            rangeKm:req.body.rangeKm,
            status:req.body.status,
            airlineId:req.body.airlineId,
            manufacturedYear:req.body.manufacturedYear,
            lastMaintenanceDate:req.body.lastMaintenanceDate
        })

        SuccessResponse.message='Successfully created a new airplane'
        SuccessResponse.data=airplane
        return res.status(StatusCodes.OK).json({SuccessResponse})

    }catch(err)
    {
        ErrorResponse.message='something went wrong while creating airplane'
        ErrorResponse.error={explanation:'Error while creating airplane'}
        return res.status(StatusCodes.BAD_REQUEST).json({ErrorResponse});
    }
}

module.exports={
    createAirplane
}