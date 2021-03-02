import BaseRouter from '../utils/base/router.base';
import ShippingController from '../controllers/shipping.controller';

class ShippingRoutes extends BaseRouter {
  routes(): void {
    this.router.get('/provincies', ShippingController.getProvincies);
    this.router.get('/cities/:id', ShippingController.getCities);
    this.router.get(
      '/costs/:origin/:destination/:weight',
      ShippingController.getCosts
    );
  }
}

export default new ShippingRoutes().router;
