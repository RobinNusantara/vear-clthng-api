import { Request, Response } from 'express';

interface Controller {
  index(req: Request, res: Response): Promise<Response>;
  insert(req: Request, res: Response): Promise<Response>;
  select(req: Request, res: Response): Promise<Response>;
  update(req: Request, res: Response): Promise<Response>;
  remove(req: Request, res: Response): Promise<Response>;
}

export default Controller;
