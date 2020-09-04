const debug = require('debug')('app:controller:materialActivity');
const materialActivity = require('../models/materialActivity.js');

const config = require('../configs.json');

class ActivityController {
  
  async add(req, res, next) {
    let data = req.body;

    try {
      let result = await materialActivity.add(data);
      res.status(200).json({
        pesan: "Berhasil  menyimpan",
        userData: result.rows[0],
      })
    } catch (e) {
      console.log(e);
      res.status(400).json({
        pesan: "Terdapat Error" + e
      })
    }
  }

  async getById(req, res, next) {
    res.locals.edit = true;

    let id = req.params.id;

    debug('detail %o', id)

    try {
      let detail = (await materialActivity.get(id));

      res.status(200).json(detail)

    } catch (e) {
      next(e.detail || e);
    }
  }

  
  async delete(req, res, next) {
    let id = req.params.id;

    try {
      let result = (await materialActivity.delete({ id }));
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
}

module.exports = new ActivityController();