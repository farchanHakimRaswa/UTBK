const Router = require('express').Router();
const materialType = require('../controllers/materialType.js');

Router.get('/', materialType.getType)
    .get('/:type', materialType.getMaterialByType)

module.exports = Router;