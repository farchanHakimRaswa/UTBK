const Router = require('express').Router();
const questionBank = require('../controllers/questionBank.js');

Router.post('/', questionBank.add)
        .put('/', questionBank.edit)
        .delete('/:id_question', questionBank.delete)
        .get('/byActivity/:id', questionBank.getByIdActivity)
    

module.exports = Router;