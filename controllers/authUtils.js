const errorUtils = require('./errorUtils');
const _ = require('lodash');

const getCookies = (req) => {
    return req.cookies;
}

exports.processRequestWithJWT = (req, callback, fallback) => {
    let cookies = getCookies(req);
    if (_.isEmpty(cookies.jwt)) {
        fallback(errorUtils.getErrorTemplate('Sesi berakhir. Mohon login ulang.'));
    } else {
        callback();
    }
}

exports.processRegistrationError = (error) => {
    if (error.code === '23505') {
        let words = error.constraint.split('_');
        let columnName = words[1];
        return errorUtils.getErrorTemplate(`${columnName} telah digunakan.`);
    } else {
        console.log(error);
        return errorUtils.getDefaultError();
    }
}

exports.processLoginError = (error) => {
    return errorUtils.getErrorTemplate(`${error.message} Mohon coba lagi.`);
}