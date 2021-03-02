import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import { config as dotenv } from 'dotenv';
import errorMiddleware from './middlewares/error.middleware';
import AuthRoutes from './routes/auth.routes';
import ProductRoutes from './routes/product.routes';
import ShippingRoutes from './routes/shipping.routes';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorHandling();
    dotenv();
  }

  protected initializeMiddlewares(): void {
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(bodyParser.json());
  }

  protected initializeErrorHandling(): void {
    this.app.use(errorMiddleware);
  }

  protected initializeRoutes(): void {
    this.app.use('/api/v2/auth', AuthRoutes);
    this.app.use('/api/v2/products', ProductRoutes);
    this.app.use('/api/v2/shipping', ShippingRoutes);
    this.app.use((req: Request, res: Response) => {
      res.status(404).send('Page Not Found');
    });
  }
}

const port: number = 4000 || process.env.PORT;
const { app } = new App();
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
