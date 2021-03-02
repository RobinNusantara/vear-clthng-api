import cors from 'cors';
import BaseRouter from '../utils/base/router.base';
import ProductSchema from '../validation/product.validation';
import corsOptions from '../middlewares/cors.middleware';
import validationMiddleware from '../middlewares/validation.middleware';
import ProductController from '../controllers/product.controller';

class ProductRoutes extends BaseRouter {
  routes(): void {
    this.router.post(
      '/',
      cors(corsOptions),
      validationMiddleware(ProductSchema),
      ProductController.insert
    );
    this.router.get('/', ProductController.index);
    this.router.get('/:id', ProductController.select);
    this.router.patch('/:id', cors(corsOptions), ProductController.update);
    this.router.delete('/:id', cors(corsOptions), ProductController.remove);
  }
}

export default new ProductRoutes().router;
