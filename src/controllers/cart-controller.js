const {PrismaClient} = require('@prisma/client');
const {ErrorHandler} = require('../helpers/error');

const prisma = new PrismaClient();

async function index(req, res, next) {
  try {
    const {id} = req.user;

    const cart = await prisma.cart.findMany({
      where: {
        ownerId: id,
      },
      include: {
        collection: {
          include: {
            images: {
              select: {
                productImage: true,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    if (cart.length === 0) {
      return res.status(201).json({
        status: 'ok',
        messages: 'Your shopping cart is empty',
        data: [],
      });
    } else {
      return res.status(201).json({
        status: 'ok',
        messages: '',
        data: cart,
      });
    }
  } catch (error) {
    next(error);
  }
}

async function insert(req, res, next) {
  try {
    const {id} = req.user;
    const {collectionId} = req.body;

    const carts = await prisma.cart.findMany({
      where: {
        ownerId: id,
      },
    });

    const isCartExist = carts.filter((cart) => cart.collectionId === collectionId);

    if (!!isCartExist.length) {
      throw new ErrorHandler(400, 'This product already in your shopping cart');
    }

    const cart = await prisma.cart.create({
      data: {
        owner: {
          connect: {
            id,
          },
        },
        collection: {
          connect: {
            id: collectionId,
          },
        },
        productQuantity: 1,
      },
    });

    res.status(201).json({
      status: 'ok',
      messages: 'Successfully inserted a product to your shopping cart',
      data: cart,
    });
    next();
  } catch (error) {
    next(error);
  }
}

async function patch(req, res, next) {
  try {
    const {id} = req.user;
    const {productQuantity} = req.body;

    const cart = await prisma.cart.update({
      where: {
        id,
      },
      data: {
        productQuantity,
      },
    });

    res.status(201).json({
      status: 'ok',
      messages: 'Successfully updated a product in your shopping cart',
      data: cart,
    });
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next) {
  try {
    const {id} = req.params;

    const cart = await prisma.cart.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(201).json({
      status: 'ok',
      messages: 'Successfully removed a product in your shopping cart',
      data: cart,
    });
  } catch (error) {
    next(error);
  }
}

async function removeMany(req, res, next) {
  try {
    const {id} = req.user;

    const cart = await prisma.cart.deleteMany({
      where: {
        ownerId: id,
      },
    });

    res.status(201).json({
      status: 'ok',
      messages: 'Successfully removed products in your shopping cart',
      data: cart,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {index, insert, patch, remove, removeMany};
