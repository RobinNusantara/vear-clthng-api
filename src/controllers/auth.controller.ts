import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import AuthenticationController from '../utils/interfaces/auth.interface';
import Authentication from '../utils/base/auth.base';

class AuthController implements AuthenticationController {
  public prisma = new PrismaClient();

  signin = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { email, password } = req.body;

      const user = await this.prisma.user.findUnique({ where: { email } });

      if (!user) {
        return res.status(400).json({
          status: 'error',
          message: 'email or password is incorrect',
        });
      }

      const isPasswordValid = await Authentication.comparePassword(
        password,
        user.password
      );

      if (!isPasswordValid) {
        return res.status(400).json({
          status: 'error',
          message: 'email or password is incorrect',
        });
      }

      const token = Authentication.generateToken(
        user.id,
        user.username,
        user.email
      );

      return res.status(201).json({
        status: 'ok',
        message: 'Successful Sign In',
        token,
      });
    } catch (err) {
      return res.status(400).json({
        status: 'error',
        message: err.message,
      });
    }
  };

  signup = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { email, username, password } = req.body;

      const isEmailExists = await this.prisma.user.findUnique({
        where: { email },
      });

      if (isEmailExists) {
        return res.status(400).json({
          status: 'error',
          message: 'email already taken',
        });
      }

      const isUsernameExists = await this.prisma.user.findUnique({
        where: { username },
      });

      if (isUsernameExists) {
        return res.status(400).json({
          status: 'error',
          message: 'username already taken',
        });
      }

      const hashedPassword = await Authentication.hashPassword(password);

      const user = await this.prisma.user.create({
        data: {
          email,
          username,
          password: hashedPassword,
        },
      });

      const token = Authentication.generateToken(
        user.id,
        user.username,
        user.email
      );

      return res.status(201).json({
        status: 'ok',
        message: 'Successfull create an account',
        token,
      });
    } catch (err) {
      return res.status(400).json({
        status: 'error',
        message: err.message,
      });
    }
  };
}

export default new AuthController();
