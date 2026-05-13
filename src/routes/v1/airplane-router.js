 
const {AirplaneController} = require('../../controller')
const {AirplaneMiddleware} = require('../../middlewares')
const express = require('express')
const router = express.Router();

router.post('/', AirplaneMiddleware.validateCreateRequest, AirplaneController.createAirplane);
router.get('/', AirplaneController.getAllAirplanes);
router.get('/:id', AirplaneController.getAirplane);
router.patch('/:id', AirplaneController.updateAirplane);
router.delete('/:id', AirplaneController.destroyAirplane);

module.exports=router;