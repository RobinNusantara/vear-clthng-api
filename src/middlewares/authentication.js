const jwt = require('jsonwebtoken');

module.exports = function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token === null) {
    return res.status(401).json({
      'status': 'error',
      'messages': 'no token provided',
    });
  }

  jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, user) => {
    if (err) {
      return res.status(403).json({
        'status': 'error',
        'messages': err.message,
      });
    }

    req.user = user;
    next();
  });
};
