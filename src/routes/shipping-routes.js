const {Router} = require('express');
const controller = require('../controllers/shipping-controller');

const router = new Router();

router.get('/provincies/list', controller.getProvincies);
router.get('/cities/:provinceId', controller.getCities);
router.get('/costs/:destinationId', controller.getCosts);

module.exports = router;
