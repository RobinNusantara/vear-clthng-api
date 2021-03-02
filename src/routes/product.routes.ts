import BaseRouter from '../utils/base/router.base';
import ProductController from '../controllers/product.controller';

class ProductRoutes extends BaseRouter {
  routes(): void {
    this.router.post('/', ProductController.insert);
    this.router.get('/', ProductController.index);
    this.router.get('/:id', ProductController.select);
    this.router.patch('/:id', ProductController.update);
    this.router.delete('/:id', ProductController.remove);
  }
}

export default new ProductRoutes().router;
