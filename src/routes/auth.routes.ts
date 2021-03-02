import BaseRouter from '../utils/base/router.base';
import validationMiddleware from '../middlewares/validation.middleware';
import LoginSchema from '../validation/signin.validation';
import RegisterSchema from '../validation/signup.validation';
import AuthController from '../controllers/auth.controller';

class AuthRoutes extends BaseRouter {
  routes(): void {
    this.router.post(
      '/signin',
      validationMiddleware(LoginSchema),
      AuthController.signin
    );
    this.router.post(
      '/signup',
      validationMiddleware(RegisterSchema),
      AuthController.signup
    );
  }
}

export default new AuthRoutes().router;
