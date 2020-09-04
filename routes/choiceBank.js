const Router = require('express').Router();
const choiceBank = require('../controllers/choiceBank.js');

Router.post('/', choiceBank.add)
        .put('/', choiceBank.edit)
        .delete('/:id_choice', choiceBank.delete)
        .get('/byQuestionId/:id?', choiceBank.getByQuestionId)
    

module.exports = Router;