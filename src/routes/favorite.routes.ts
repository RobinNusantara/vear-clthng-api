import BaseRouter from '../utils/base/router.base';
import authMiddleware from '../middlewares/auth.middleware';
import FavoriteController from '../controllers/favorite.controller';

class FavoriteRoutes extends BaseRouter {
  routes(): void {
    this.router.post('/', authMiddleware, FavoriteController.insert);
    this.router.get('/', authMiddleware, FavoriteController.index);
    this.router.delete('/:id', authMiddleware, FavoriteController.remove);
  }
}

export default new FavoriteRoutes().router;
