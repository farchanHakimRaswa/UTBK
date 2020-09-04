const debug = require('debug')('app:controller:materialActivity');;
const pool = require('../libs/db');
const encryptPassword = require('../libs/secret').encryptPassword;
const comparePassword = require('../libs/secret').comparePassword;
const generatePassword = require('../libs/secret').generatePassword;

const schema = '"Member"';
const table = '"material_activity"'
const dbTable = schema + '.' + table;

class ActivityModel {

    async add (data) {
        let value = [data.id_material, data.posting_date];
        let res = await pool.query('INSERT INTO ' + dbTable + ' (id_material, posting_date) VALUES ($1, $2) RETURNING *;', value);
        debug('add %o', res);
    
        return res;
      }
      async get (data) {

        let res;
        let id_material = data
    
        if (id_material === undefined) {
          res = await pool.query('SELECT * from ' + dbTable + ' ORDER BY id_material ASC')
        } else {
          res = await pool.query('SELECT * from ' + dbTable + ' where id_material = $1 ORDER BY id_material ASC', [id_material]);
        }
     
        debug('get %o', res);
    
        return res.rows;
        
      }  
      async delete (data) {

        let id_material = data;

        let res = await pool.query('DELETE from ' + dbTable + ' where id_material = $1 RETURNING *', [id_material ]);
    
        debug('delete %o', res);
    
        return res;
      }
}

module.exports = new ActivityModel();