const {Router} = require('express');
const controller = require('../controllers/profile-controller');
const authenticationToken = require('../middlewares/authentication');
const upload = require('../middlewares/storage');

const router = new Router();

router.post('/user/create/credentials', authenticationToken, upload.single('avatar'), controller.insert);
router.get('/user/credentials', authenticationToken, controller.select);

module.exports = router;
