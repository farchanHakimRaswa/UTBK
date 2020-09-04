const authUtils = require('./authUtils.js');
const debug = require('debug')('app:controller:user');
const user = require('../models/user.js');
const jwt = require('jsonwebtoken');
const config = require('../configs.json');
const maxAge = 1 * 24 * 60 * 60;

class UserController {
  async showAllUser(req, res) {
    let users = (await user.get()).rows;

    res.render('index', {
      users
    });
  }

  async detail(req, res, next) {
    let callback = async () => {
      try {
        res.locals.edit = true;
        let id = req.params.id;
  
        debug('detail %o', id);
  
        let detail = (await user.get(id)).rows[0]
        res.status(200).json({
          detail
        });
      } catch (e) {
        next(e.detail || e);
      }
    };

    let fallback = (err) => {
      next(err);
    };

    authUtils.processRequestWithJWT(req, callback, fallback);
  }

  async edit(req, res, next) {
    let callback = async () => {
      let data = req.body;
      try {
        let result = (await user.edit(data)).rows[0];
        res.status(200).json({result});
      } catch (e) {
        console.log(e);
        let errorResponse = authUtils.processLoginError(e);
        res.status(400).json(errorResponse);
      }
    };

    let fallback = (err) => {
      console.log(err);
      next(err);
    }

    authUtils.processRequestWithJWT(req, callback, fallback);
  }

  async editPassword(req, res, next) {
    let callback = async () => {
      let data = req.body;
      try {
        let result = (await user.editPassword(data)).rows[0];
        res.status(200).json({result});
      } catch (e) {
        console.log(e);
        let errorResponse = authUtils.processLoginError(e);
        res.status(400).json(errorResponse);
      }
    };

    let fallback = (err) => {
      console.log(err);
      next(err);
    }

    authUtils.processRequestWithJWT(req, callback, fallback);
  }

  async login(req, res, next) {
    let username = req.body.username;
    let password = req.body.password;

    try {
      let result = await user.login(username, password);
      let token = jwt.sign({ data: result }, config.secret, {
        expiresIn: maxAge * 1000
      });
      res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(200).json({
        pesan: "Berhasil login",
        userData: result
      });

    } catch (e) {
      let errorResponse = authUtils.processLoginError(e);
      res.status(400).json(errorResponse);
    }
  }

  async logout(req, res, next) {
    res.clearCookie('jwt');
    res.status(200).json({ message: 'Cookie cleared' });
  }

  async delete(req, res, next) {
    let id = req.body.id;

    try {
      let result = (await user.delete({ id }));
      res.status(200).json({
        pesan: "Berhasil  dihapus",
        result
      })
    } catch (e) {
      res.status(400).json({
        pesan: "Terdapat Error",
        e
      })
    }
  }

  async register(req, res, next) {
    let data = req.body;
  
    try {
      let result = await user.register(data);
      res.status(200).json({
        pesan: "Berhasil  menyimpan",
        userData: result,
      })
    } catch (e) {
      let errorResponse = authUtils.processRegistrationError(e);
      res.status(400).json(errorResponse);
    }
  }
}

module.exports = new UserController();