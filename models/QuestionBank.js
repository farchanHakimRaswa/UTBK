const debug = require('debug')('app:controller:questionBank');
const pool = require('../libs/db');
const encryptPassword = require('../libs/secret').encryptPassword;
const comparePassword = require('../libs/secret').comparePassword;
const generatePassword = require('../libs/secret').generatePassword;

const schema = '"Member"';
const table = '"question_bank"'
const dbTable = schema + '.' + table;

class QuestionBankModel {

    async add (data) {
        let value = [data.id_activity, data.id_material, data.question];
     
        let res = await pool.query('INSERT INTO ' + dbTable + ' (id_activity, id_material, question) VALUES ($1, $2, $3) RETURNING *;', value);
        debug('add %o', res);
    
        return res;
      }
      async getByActivity (data) {

        let res;
        let id_activity = data
    
        if (id_activity === undefined) {
          res = await pool.query('SELECT id_question, question, posting_date from ' + dbTable + ' ORDER BY id_activity ASC')
        } else {
          res = await pool.query('SELECT id_question, question, posting_date from ' + dbTable + ' where id_activity = $1 ORDER BY id_activity ASC', [id_activity]);
        }
    
        debug('get %o', res);
    
        return res.rows;
        
      }  
      async edit (data) {
  
        let sets =[data.id_question,data.id_activity, data.id_material, data.question, data.choiceA,  data.choiceB,  data.choiceC,  data.choiceD];
      
        res = await pool.query('UPDATE ' + dbTable + 'SET  (id_material, question, choiceA, choiceB, choiceC, choiceD) = ($2, $3, $4, $5, $6, $7) WHERE id_question = $1', sets);
      
          debug('edit %o', res);
          
          if (res.rowCount <= 0) {
            throw 'login fail';
          } else {
            return res;
          }
        }

      async delete (data) {

        let id = data;

        const res = await pool.query('DELETE from ' + dbTable + ' where id_question = $1 RETURNING *', [id ]);
    
        debug('delete %o', res);
    
        return res;
      }
}

module.exports = new QuestionBankModel();