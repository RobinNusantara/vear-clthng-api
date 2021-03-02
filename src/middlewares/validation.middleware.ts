import { Request, Response, NextFunction } from 'express';
import { Schema } from 'joi';

function validationMiddleware(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (!error) {
      next();
    } else {
      const { details } = error;
      res.status(400).json({
        status: 'error',
        message: details[0].message,
      });
    }
  };
}

export default validationMiddleware;
