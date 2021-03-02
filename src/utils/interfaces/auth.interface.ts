import { Request, Response } from 'express';

interface AuthenticationController {
  signin(req: Request, res: Response): Promise<Response>;
  signup(req: Request, res: Response): Promise<Response>;
}

export default AuthenticationController;
