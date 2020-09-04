const crypto = require('crypto');
const bcrypt = require('bcrypt');
const secret = require('../configs.json').secret;

module.exports.encryptPassword = async (plainText) => {
  const salt = await bcrypt.genSalt();
  let hash = await bcrypt.hash(plainText, salt);
  return hash;
};

module.exports.comparePassword = async (input, stored) => {
  let compareResult = await bcrypt.compare(input, stored);
  return compareResult;
}

module.exports.generatePassword = (username, size = 8) => {
  let generated = crypto
    .randomBytes(size)
    .toString('base64')
    .slice(0, size);
  console.log(`Username: ${username}, Password: ${generated}`);
  return generated
}