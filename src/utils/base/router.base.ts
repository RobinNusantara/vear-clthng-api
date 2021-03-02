import { Router } from 'express';
import _Router from '../interfaces/router.interface';

abstract class BaseRouter implements _Router {
  public router: Router;

  constructor() {
    this.router = new (Router as any)();
    this.routes();
  }

  abstract routes(): void;
}

export default BaseRouter;
