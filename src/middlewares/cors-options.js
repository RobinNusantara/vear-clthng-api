const {ErrorHandler} = require('../helpers/error');

const whitelist = [process.env.VEAR_CLTHNG_URL];

const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new ErrorHandler(500, 'This resource not allowed by CORS'));
    }
  },
};

module.exports = corsOptions;
