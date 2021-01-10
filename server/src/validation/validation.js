const Joi = require('joi');

const RegisterSchema = Joi.object({
  email: Joi.string()
      .email()
      .required(),
  username: Joi.string()
      .alphanum()
      .min(3)
      .max(15)
      .required(),
  password: Joi.string()
      .min(8)
      .required(),
});

const LoginSchema = Joi.object({
  email: Joi.string()
      .email()
      .required(),
  password: Joi.string()
      .required(),
});

module.exports = {RegisterSchema, LoginSchema};
