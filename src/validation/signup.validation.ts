import { object, string } from 'joi';

const RegisterSchema = object({
  email: string().email().required(),
  username: string().min(3).max(15).required(),
  password: string().min(8).required(),
});

export default RegisterSchema;
