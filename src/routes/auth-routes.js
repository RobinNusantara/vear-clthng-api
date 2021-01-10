const {Router} = require('express');
const controller = require('../controllers/auth-controller');

const router = new Router();

router.post('/signup', controller.register);
router.post('/signin', controller.login);

module.exports = router;
