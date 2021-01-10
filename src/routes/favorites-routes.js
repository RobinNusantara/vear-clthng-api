const {Router} = require('express');
const controller = require('../controllers/favorites-controller');
const authenticateToken = require('../middlewares/authentication');

const router = new Router();

router.post('/insert', authenticateToken, controller.insert);
router.get('/list', authenticateToken, controller.index);
router.delete('/remove/:id', authenticateToken, controller.remove);
router.delete('/delete/all', authenticateToken, controller.removeMany);

module.exports = router;
