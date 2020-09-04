const debug = require('debug')('app:controller:questionChoic');
const pool = require('../libs/db');

const schema = '"Member"';
const table = '"question_choice"'
const dbTable = schema + '.' + table;

class ChoiceBankModel {

    async add (data) {
        let value = [data.choice_string, data.choice_istrue, data.choise_quest_id];
        let res = await pool.query('INSERT INTO ' + dbTable + ' (choice_string, choice_istrue, choise_quest_id) VALUES ($1, $2, $3) RETURNING *;', value);
        debug('add %o', res);
    
        return res;
      }
      async getByQuestionId (data) {

        let res;
        let choise_quest_id = data
    
        if (choise_quest_id === undefined) {
          res = await pool.query('SELECT * from ' + dbTable + ' ORDER BY choise_quest_id ASC')
        } else {
          res = await pool.query('SELECT * from ' + dbTable + ' where choise_quest_id = $1 ORDER BY choise_quest_id ASC', [choise_quest_id]);
        }
    
        debug('get %o', res);
    
        return res.rows;
        
      }  
      async edit (data) {
  
        let sets = [data.choice_ques_id , data.choice_string, data.choice_istrue, data.choise_quest_id];
      
        res = await pool.query('UPDATE ' + dbTable + 'SET  (choice_string, choice_istrue, choise_quest_id) = ($2, $3, $4) WHERE choice_ques_id = $1', sets);
      
          debug('edit %o', res);
          
          if (res.rowCount <= 0) {
            throw 'login fail';
          } else {
            return res;
          }
        }

      async delete (data) {

        let id = data;

        const res = await pool.query('DELETE from ' + dbTable + ' where choice_ques_id = $1 RETURNING *', [id ]);
    
        debug('delete %o', res);
    
        return res;
      }
}

module.exports = new ChoiceBankModel();