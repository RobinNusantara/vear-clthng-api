import { genSalt, hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

class Authentication {
  public static hashPassword = async (password: string): Promise<string> => {
    const salt = await genSalt(10);
    const results = hash(password, salt);
    return results;
  };

  public static comparePassword = async (
    password: string,
    encryptedPassword: string
  ): Promise<boolean> => {
    const results = await compare(password, encryptedPassword);
    return results;
  };

  public static generateToken = (
    id: number,
    username: string,
    email: string
  ): string => {
    const secretToken: string = process.env.SECRET_TOKEN || 'SECRET_TOKEN';
    const payload: object = { id, username, email };
    const token: string = sign(payload, secretToken);
    return token;
  };
}

export default Authentication;
