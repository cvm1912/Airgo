const { loggerConfig } = require('../config');
const { StatusCodes } = require('http-status-codes');
const {AppError}  = require('../utils/errors')
class CrudRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (err) {
            loggerConfig.error(err);
            throw err;
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (err) {
            loggerConfig.error(err);
            throw err;
        }
    }

    async get(id) {
        try {
            const response = await this.model.findByPk(id);
            if(!response){
                throw new AppError('Not able to found the resource',StatusCodes.NOT_FOUND)
            }
            return response;
        } catch (err) {
            loggerConfig.error(err);
            throw err;
        }
    }

    async update(id, data) {
        try {
            const response = await this.model.update(data, { where: { id } });
             if(!response){
                throw new AppError('Not able to found the resource',StatusCodes.NOT_FOUND)
            }
            return response;
        } catch (err) {
            loggerConfig.error(err);
            throw err;
        }
    }

    async destroy(id) {
        try {
            const response = await this.model.destroy({ where: { id } });
            if(!response){
                throw new AppError('Not able to found the resource',StatusCodes.NOT_FOUND)
            }
            return response;
        } catch (err) {
            loggerConfig.error(err);
            throw err;
        }
    }
}

module.exports = CrudRepository;
