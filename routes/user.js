const Router = require('express').Router();
const user = require('../controllers/user.js');

Router.post('/login', user.login)
      .post('/register', user.register)
      .post('/delete', user.delete)
      .put('/edit', user.edit)
      .put('/edit-password', user.editPassword)
      .get('/detail/:id', user.detail)
      .post('/logout', user.logout)
    

module.exports = Router;