const debug = require('debug')('app:controller:QuestionBank');
const QuestionBank = require('../models/QuestionBank.js');

const config = require('../configs.json');

class QuestionBankController {
  
  async add(req, res, next) {
    let data = req.body;

    try {
      let result = await QuestionBank.add(data);
      res.status(200).json({
        pesan: "Berhasil  menyimpan",
        result : result.rows[0],
      })
    } catch (e) {
      
      res.status(400).json({
        pesan: "Terdapat Error" + e
      })
    }
  }

  async getByIdActivity(req, res, next) {
    res.locals.edit = true;

    let id = req.params.id;

    debug('detail %o', id)

    try {
      let detail = (await QuestionBank.getByActivity(id));

      res.status(200).json({
        pesan: "Soal berdasarkan id aktifitas",
        userData: detail,
      })

    } catch (e) {
      next(e.detail || e);
    }
  }

  async edit(req, res, next) {

    let data = req.body;

    try {
      let result = await QuestionBank.edit(data);
      res.end('ok!');
    } catch (e) {
      next(e.detail || e);
    }
  }

  async delete(req, res, next) {
    let id = req.params.id;

    try {
      let result = (await QuestionBank.delete({ id }));
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

module.exports = new QuestionBankController();