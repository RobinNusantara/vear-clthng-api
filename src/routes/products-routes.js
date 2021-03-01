const {Router} = require('express');
const cors = require('cors');
const corsOptions = require('../middlewares/cors-options');
const upload = require('../middlewares/storage');
const controller = require('../controllers/products-controller');

const router = new Router();

router.post('/insert', upload.array('productImage', 12), controller.insert);
router.get('/all/list', cors(corsOptions), controller.index);
router.get('/list/:category', controller.category);
router.get('/details/:id', controller.select);
router.put('/update/:id', controller.patch);
router.delete('/remove/:category/:id', controller.remove);

module.exports = router;
