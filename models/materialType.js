const debug = require('debug')('app:controller:materialType');;
const pool = require('../libs/db');

const schema = '"Member"';
const table = '"material_type"'
const dbTable = schema + '.' + table;

class TypeModel {

    async getType () {
        
        let res = await pool.query('SELECT DISTINCT type from ' + dbTable + ' ORDER BY type ASC')
        return res.rows.map(data=>{
            return data.type
        });
    
    } 
    
    async getMaterialByType (type) {
        
        let res = await pool.query('SELECT material from ' + dbTable + ' where type = $1 ORDER BY type ASC', [type]);
        
        return res.rows
    
    } 
      
}

module.exports = new TypeModel();