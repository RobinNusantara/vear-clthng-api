import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import HttpException from '../helpers/http.exception';

function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  const authHeader = authorization;

  const token = authHeader && authHeader.split(' ')[1];

  if (!token) throw new HttpException(401, 'Invalid Token');

  const secretToken: string = process.env.SECRET_TOKEN || 'SECRET_TOKEN';

  verify(token, secretToken, (err, user) => {
    if (err) throw new HttpException(403, err.message);

    req.app.locals.user = user;
    next();
  });
}

export default authMiddleware;
