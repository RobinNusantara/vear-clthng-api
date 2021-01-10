const {Router} = require('express');
const controller = require('../controllers/products-controller');
const upload = require('../middlewares/storage');

const router = new Router();

router.post('/insert', upload.array('productImage', 12), controller.insert);
router.get('/list/:category', controller.index);
router.get('/details/:id', controller.select);
router.put('/update/:id', controller.patch);
router.delete('/remove/:id', controller.remove);

module.exports = router;
