const {PrismaClient} = require('@prisma/client');
const bcrypt = require('bcryptjs');
const {RegisterSchema, LoginSchema} = require('../validation/validation');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

async function register(req, res, next) {
  try {
    const {email, username, password} = req.body;
    const {error} = RegisterSchema.validate(req.body);

    if (error) {
      return res.status(400).json({
        'status': 'error',
        'messages': error.details[0].message,
      });
    }

    const isUsernameExists = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (isUsernameExists) {
      return res.status(400).json({
        'status': 'error',
        'messages': 'this username is already taken, please enter a new username',
      });
    }

    const isEmailExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (isEmailExists) {
      return res.status(400).json({
        'status': 'error',
        'messages': 'this email address is already taken, please enter a new email address',
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });

    const accessToken = jwt.sign(user, process.env.ACCESS_SECRET_TOKEN);

    res.status(201).json({
      'status': 'ok',
      'messages': 'Your account has been created',
      'data': {
        'id': user.id,
        'email': user.email,
        'username': user.username,
        'role': user.role,
      },
      'accessToken': accessToken,
    });
  } catch (error) {
    res.status(400).json({
      'status': 'error',
      'messages': error.message,
    });
  }
}

async function login(req, res, next) {
  const {email, password} = req.body;
  const {error} = LoginSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      'status': 'error',
      'messages': error.details[0].message,
    });
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return res.status(400).json({
      'status': 'error',
      'messages': 'email or password is incorrect',
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(400).json({
      'status': 'error',
      'messages': 'email or password is incorrect',
    });
  }

  const accessToken = jwt.sign(user, process.env.ACCESS_SECRET_TOKEN);

  res.status(201).json({
    'status': 'ok',
    'messages': 'Success login to your account',
    'data': {
      'id': user.id,
      'email': user.email,
      'username': user.username,
      'role': user.role,
    },
    'accessToken': accessToken,
  });
}

module.exports = {register, login};
