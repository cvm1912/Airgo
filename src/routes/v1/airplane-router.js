 
const {AirplaneController} = require('../../controller')
const {AirplaneMiddleware} = require('../../middlewares')
const express = require('express')
const router = express.Router();

router.post('/', AirplaneMiddleware.validateCreateRequest, AirplaneController.createAirplane);
router.get('/', AirplaneController.getAllAirplanes);

module.exports=router;