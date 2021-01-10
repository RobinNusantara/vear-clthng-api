const {Router} = require('express');
const controller = require('../controllers/cart-controller');
const authenticateToken = require('../middlewares/authentication');

const router = new Router();

router.post('/insert', authenticateToken, controller.insert);
router.get('/list', authenticateToken, controller.index);
router.put('/update', authenticateToken, controller.patch);
router.delete('/remove/:id', authenticateToken, controller.remove);
router.delete('/delete/all', authenticateToken, controller.removeMany);

module.exports = router;
