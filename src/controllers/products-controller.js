const {PrismaClient} = require('@prisma/client');
const cloudinary = require('../config/cloudinary');
const {ErrorHandler} = require('../helpers/error');

const prisma = new PrismaClient();

async function index(req, res, next) {
  try {
    const products = await prisma.product.findMany({
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
      'message': '',
      'results': products,
    });
  } catch (error) {
    next(new ErrorHandler(400, error.message.toString()));
  }
}

async function category(req, res, next) {
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
      'message': '',
      'results': products,
    });
  } catch (error) {
    next(new ErrorHandler(400, error.message.toString()));
  }
}

async function insert(req, res, next) {
  try {
    const {productCategory, productWeight, productPrice, sizes, colors} = req.body;
    const _productWeight = parseInt(productWeight);
    const _productPrice = parseInt(productPrice);
    const files = req.files;
    const _sizes = [];
    const _colors = [];
    const images = [];

    for (const size of sizes) {
      _sizes.push({productSize: size});
    }

    for (const color of colors) {
      _colors.push({productColor: color});
    }

    for (const file of files) {
      const path = await cloudinary.uploader.upload(file.path, {
        folder: `vear-clthng-storage/product-images/${productCategory}`,
      });
      images.push({productImage: path.secure_url});
    }

    const product = await prisma.product.create({
      data: {
        productName: req.body.productName,
        productBrand: req.body.productBrand,
        productCategory,
        productType: req.body.productType,
        productWeight: _productWeight,
        productPrice: _productPrice,
        sizes: {create: _sizes},
        colors: {create: _colors},
        images: {create: images},
      },
    });

    res.status(201).json({
      'status': 'ok',
      'message': '',
      'results': product,
    });
  } catch (error) {
    next(new ErrorHandler(400, error.message.toString()));
  }
}

async function select(req, res, next) {
  try {
    const {id} = req.params;
    const _id = parseInt(id);

    const product = await prisma.product.findUnique({
      where: {
        id: _id,
      },
      include: {
        sizes: {
          select: {
            productSize: true,
          },
        },
        colors: {
          select: {
            productColor: true,
          },
        },
        images: {
          select: {
            productImage: true,
          },
        },
      },
    });

    res.status(201).json({
      'status': 'ok',
      'message': '',
      'results': product,
    });
  } catch (error) {
    next(new ErrorHandler(400, error.message.toString()));
  }
}

async function patch(req, res, next) {
  try {
    const {id} = req.params;
    const {productPrice} = req.body;
    const _id = parseInt(id);
    const _productPrice = parseInt(productPrice);

    const product = await prisma.product.update({
      where: {
        id: _id,
      },
      data: {
        productName: req.body.productName,
        productLabel: req.body.productLabel,
        productColor: req.body.productColor,
        productSize: req.body.productSize,
        productPrice: _productPrice,
      },
    });

    res.status(201).json({
      'status': 'ok',
      'message': '',
      'results': product,
    });
  } catch (error) {
    next(new ErrorHandler(400, error.message.toString()));
  }
}

async function remove(req, res, next) {
  try {
    const {id, category} = req.params;
    const _id = parseInt(id);
    const folderPath = `vear-clthng-storage/product-images/${category}`;
    const types = /.jpeg|.jpg|.png/;

    const _images = await prisma.productImage.findMany({where: {collectionId: _id}});

    _images.map(async (image) => {
      const filePath = image.productImage;
      const publicId = filePath.split('/').pop().split(types)[0];
      await cloudinary.uploader.destroy(`${folderPath}/${publicId}`, function(error, result) {
        console.log(result, error);
      });
    });

    await prisma.productSize.deleteMany({where: {collectionId: _id}});
    await prisma.productColor.deleteMany({where: {collectionId: _id}});
    await prisma.productImage.deleteMany({where: {collectionId: _id}});

    const product = await prisma.product.delete({where: {id: _id}});

    res.status(201).json({
      'status': 'ok',
      'message': '',
      'results': product,
    });
  } catch (error) {
    next(new ErrorHandler(400, error.message.toString()));
  }
}

module.exports = {index, category, insert, select, patch, remove};
