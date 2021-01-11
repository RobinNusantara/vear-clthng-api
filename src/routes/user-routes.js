const {Router} = require('express');
const cors = require('cors');
const corsOptions = require('../middlewares/cors-options');
const controller = require('../controllers/user-controller');

const router = new Router();

router.get('/list', cors(corsOptions), controller.index);

module.exports = router;
