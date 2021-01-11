const {PrismaClient} = require('@prisma/client');
const cloudinary = require('../config/cloudinary');

const prisma = new PrismaClient();

async function insert(req, res, next) {
  try {
    const {id} = req.user;
    const file = req.file;

    const path = await cloudinary.uploader.upload(file.path, {
      folder: 'vear-clthng-storage/user-avatar',
    });

    const profile = await prisma.profile.create({
      data: {
        owner: {
          connect: {
            id,
          },
        },
        avatar: path.secure_url,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        address: req.body.address,
        postalCode: req.body.postalCode,
        city: req.body.city,
        phoneNumber: req.body.phoneNumber,
      },
    });

    res.status(201).json({
      'status': 'ok',
      'messages': 'Successfully created your profile',
      'data': profile,
    });
  } catch (error) {
    next(error);
  }
}

async function select(req, res, next) {
  try {
    const {id} = req.user;

    const profile = await prisma.profile.findUnique({
      where: {
        id,
      },
    });

    res.status(201).json({
      'status': 'ok',
      'messages': '',
      'data': profile,
    });
  } catch (error) {
    next(error);
  }
}

async function patch() {

}

module.exports = {insert, select, patch};
