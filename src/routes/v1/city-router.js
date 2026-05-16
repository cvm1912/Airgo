const { CityController } = require('../../controller');
const { CityMiddleware } = require('../../middlewares');
const express = require('express');
const router = express.Router();

router.post('/', CityMiddleware.validateCreateRequest, CityController.createCity);
router.get('/', CityController.getAllCities);
router.get('/:id', CityController.getCity);
router.patch('/:id', CityController.updateCity);
router.delete('/:id', CityController.destroyCity);

module.exports = router;
