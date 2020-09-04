const debug = require('debug')('app:controller:materialType');
const materialType = require('../models/materialType.js');

const config = require('../configs.json');

class TypeController {
  

  async getType(req, res, next) {
    try {
      let detail = (await materialType.getType());

      res.status(200).json(detail)

    } catch (e) {
      next(e.detail || e);
    }
  }
  async getMaterialByType(req, res, next) {
    
    let type = req.params.type
    
    try {
      let detail = (await materialType.getMaterialByType(type));

      res.status(200).json(detail)

    } catch (e) {
      next(e.detail || e);
    }
  }
  
}

module.exports = new TypeController();