const Router = require('express').Router();
const materialActivity = require('../controllers/materialActivity.js');

Router.post('/', materialActivity.add)
      .delete('/:id', materialActivity.delete)
      .get('/:id?', materialActivity.getById)
      

module.exports = Router;