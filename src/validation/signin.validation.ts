import { object, string } from 'joi';

const LoginSchema = object({
  email: string().email().required(),
  password: string().required(),
});

export default LoginSchema;
