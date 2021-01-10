const {PrismaClient} = require('@prisma/client');
const cloudinary = require('../config/cloudinary');

const prisma = new PrismaClient();

async function index(req, res, next) {
  try {
    const {category} = req.params;

    const products = await prisma.product.findMany({
      where: {
        productCategory: category,
      },
      include: {
        images: {
          select: {
            productImage: true,
          },
        },
      },
      orderBy: {id: 'asc'},
    });

    res.status(201).json({
      'status': 'ok',
      'messages': '',
      'data': products,
    });
  } catch (error) {
    res.status(400).json({
      'status': 'error',
      'messages': error.message,
    });
  }
}

async function insert(req, res, next) {
  try {
    const {productPrice} = req.body;
    const files = req.files;
    const images = [];

    for (const file of files) {
      const path = await cloudinary.uploader.upload(file.path, {
        folder: 'vear-clthng-storage/product-images',
      });
      images.push({productImage: path.secure_url});
    }

    const product = await prisma.product.create({
      data: {
        productName: req.body.productName,
        productBrand: req.body.productBrand,
        productCategory: req.body.productCategory,
        productType: req.body.productType,
        productColor: req.body.productColor,
        productSize: req.body.productSize,
        productPrice: parseInt(productPrice),
        images: {
          create: images,
        },
      },
    });

    res.status(201).json({
      'status': 'ok',
      'messages': '',
      'data': product,
    });
  } catch (error) {
    res.status(400).json({
      'status': 'error',
      'messages': error.message,
    });
  }
}

async function select(req, res, next) {
  try {
    const {id} = req.params;

    const product = await prisma.product.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        images: {
          select: {
            productImage: true,
          },
        },
      },
    });

    res.status(201).json({
      'status': 'ok',
      'messages': '',
      'data': product,
    });
  } catch (error) {
    res.status(400).json({
      'status': 'error',
      'messages': error.message,
    });
  }
}

async function patch(req, res, next) {
  try {
    const {id} = req.params;
    const {productPrice} = req.body;

    const product = await prisma.product.update({
      where: {
        id: parseInt(id),
      },
      data: {
        productName: req.body.productName,
        productLabel: req.body.productLabel,
        productColor: req.body.productColor,
        productSize: req.body.productSize,
        productPrice: parseInt(productPrice),
      },
    });

    res.status(201).json({
      'status': 'ok',
      'messages': '',
      'data': product,
    });
  } catch (error) {
    res.status(400).json({
      'status': 'error',
      'messages': error.message,
    });
  }
}

async function remove(req, res, next) {
  try {
    const {id} = req.params;

    const product = await prisma.product.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(201).json({
      'status': 'ok',
      'messages': '',
      'data': product,
    });
  } catch (error) {
    res.status(400).json({
      'status': 'error',
      'messages': error.message,
    });
  }
}

module.exports = {index, insert, select, patch, remove};
