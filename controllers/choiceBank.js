const debug = require('debug')('app:controller:ChoiceBank');
const ChoiceBank = require('../models/choiceBank.js');

const config = require('../configs.json');

class ChoiceBankController {
  
  async add(req, res, next) {
    let data = req.body;

    try {
      let result = await ChoiceBank.add(data);
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

  async getByQuestionId(req, res, next) {
    res.locals.edit = true;

    let id = req.params.id;

    debug('detail %o', id)

    try {
      let detail = (await ChoiceBank.getByQuestionId(id));

      res.status(200).json({
        pesan: "Pilihan berdasarkan id question",
        userData: detail,
      })

    } catch (e) {
      next(e.detail || e);
    }
  }

  async edit(req, res, next) {

    let data = req.body;

    try {
      let result = await ChoiceBank.edit(data);
      res.end('ok!');
    } catch (e) {
      next(e.detail || e);
    }
  }

  async delete(req, res, next) {
    let id = req.params.id_choice;

    try {
      let result = (await ChoiceBank.delete({ id }));
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

module.exports = new ChoiceBankController();