const jwt = require('jsonwebtoken');
const {ErrorHandler} = require('../helpers/error');

module.exports = function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token === null) throw new ErrorHandler(401, 'No JWT token provided');

  jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, user) => {
    if (err) throw new ErrorHandler(403, err.message);

    req.user = user;
    next();
  });
};
