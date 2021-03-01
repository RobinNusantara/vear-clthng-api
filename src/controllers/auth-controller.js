const {PrismaClient} = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {RegisterSchema, LoginSchema} = require('../validation/validation');
const {ErrorHandler} = require('../helpers/error');

const prisma = new PrismaClient();

async function register(req, res, next) {
  try {
    const {email, username, password} = req.body;
    const {error} = RegisterSchema.validate(req.body);

    if (error) throw new ErrorHandler(400, error.details[0].message);

    const isUsernameExists = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (isUsernameExists) {
      throw new ErrorHandler(400, 'This username is already taken, please enter a new username');
    }

    const isEmailExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (isEmailExists) {
      throw new ErrorHandler(400, 'This email address is already taken, please enter a new email address');
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
      status: 'ok',
      messages: 'Your account has been created',
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        role: user.role,
      },
      accessToken,
    });
    next();
  } catch (error) {
    next(new ErrorHandler(400, error.message.toString()));
  }
}

async function login(req, res, next) {
  try {
    const {email, password} = req.body;
    const {error} = LoginSchema.validate(req.body);

    if (error) throw new ErrorHandler(400, error.details[0].message);

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) throw new ErrorHandler(400, 'Email or Password is incorrect');

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) throw new ErrorHandler(400, 'Email or Password is incorrect');

    const accessToken = jwt.sign(user, process.env.ACCESS_SECRET_TOKEN);
    res.status(201).json({
      status: 'ok',
      messages: 'Success login to your account',
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        role: user.role,
      },
      accessToken: accessToken,
    });
    next();
  } catch (error) {
    next(new ErrorHandler(400, error.message.toString()));
  }
}

module.exports = {register, login};
