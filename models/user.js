const debug = require('debug')('app:model:user');
const pool = require('../libs/db');
const { hash } = require('bcrypt');
const encryptPassword = require('../libs/secret').encryptPassword;
const comparePassword = require('../libs/secret').comparePassword;
const generatePassword = require('../libs/secret').generatePassword;

const schema = '"Member"';
const table = '"users"'
const dbTable = schema + '.' + table;

class UserModel {

  async login (username, password) {
    const res = await pool.query('SELECT id, name, username, password, role from ' + dbTable + ' where username = $1', [username]);

    debug('login %o', res);
     
    if (res.rowCount <= 0) {
      throw new Error('User tidak ditemukan.');
    } else {
      if (await comparePassword(password, res.rows[0].password)) {
        res.rows[0].password = undefined;
        return res.rows[0];
      } else {
        throw new Error('Password salah.');
      }
    }
  }

  async register (data) {
    let user = [data.name, data.nisn, data.username, await encryptPassword(generatePassword(data.username)), data.email, data.origin, data.role, data.phone];
    let res = await pool.query('INSERT INTO ' + dbTable + ' (name, nisn, username, password, email, origin, role, phone) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING username,id,name;', user);
    // debug('register %o', res);

    return user;
  }

  async edit(data) {
    let sets = [data.id, data.name, data.username, data.email, data.origin, data.role, data.phone];
    let res = await pool.query('UPDATE ' + dbTable + ' SET (name, username, email, origin, role, phone) = ($2, $3, $4, $5, $6, $7) WHERE id = $1 RETURNING username,id,name,role;', sets);
    
    debug('edit %o', res);
    if (res.rowCount <= 0) {
      throw 'edit fail';
    } else {
      return res;
    }
  }

  async editPassword(data) {
    let firstQueryResult = await pool.query('SELECT password FROM ' + dbTable + ' WHERE id = $1', [data.id]);
    let password = firstQueryResult.rows[0].password;

    if (firstQueryResult.rowCount <= 0) {
      throw new Error('User tidak ditemukan.');
    } else {
      if (await comparePassword(data.oldPassword, password)) {
        let hashed = await encryptPassword(data.newPassword);
        let sets = [data.id, hashed];
        let updateQueryResult = await pool.query('UPDATE ' + dbTable + ' SET password = $2 WHERE id = $1 RETURNING username, id, name;', sets);
        return updateQueryResult;
      } else {
        throw new Error('Password lama tidak sesuai.');
      }
    }
  }

  async delete(data) {

    let id = data.id;
    let username = data.username;
    let column = (id === undefined) ? 'username' : 'id';

    const res = await pool.query('DELETE from ' + dbTable + ' where ' + column + ' = $1 RETURNING id, name, username, role', [(id || username)]);

    debug('delete %o', res);

    return res;
  }

  async get(id) {

    let res;

    if (id === undefined) {
      res = await pool.query('SELECT id, name, username, role from ' + dbTable + ' ORDER BY id ASC')
    } else {
      res = await pool.query('SELECT id, nisn, name, username, email, origin, role, phone from ' + dbTable + ' where id = $1 ORDER BY id ASC', [id]);
    }

    debug('get %o', res);

    return res;

  }
}

module.exports = new UserModel();