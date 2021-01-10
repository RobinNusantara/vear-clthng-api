const {PrismaClient} = require('@prisma/client');

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
        'status': 'ok',
        'messages': 'Your cart is empty',
        'data': [],
      });
    } else {
      return res.status(201).json({
        'status': 'ok',
        'messages': '',
        'data': cart,
      });
    }
  } catch (error) {
    res.status(400).json({
      'status': 'error',
      'messages': error.message,
      'data': [],
    });
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
      return res.status(400).json({
        'status': 'error',
        'messages': 'This item already in your cart',
      });
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
      'status': 'ok',
      'messages': 'Item successfully added to your cart',
      'data': cart,
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
      'status': 'ok',
      'messages': 'Successfully updated item in your cart',
      'data': cart,
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

    const cart = await prisma.cart.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(201).json({
      'status': 'ok',
      'messages': '',
      'data': cart,
    });
  } catch (error) {
    res.status(400).json({
      'status': 'error',
      'messages': error.message,
    });
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
      'status': 'ok',
      'messages': 'Successfully removed all items in your cart',
      'data': cart,
    });
  } catch (error) {
    res.status(400).json({
      'status': 'error',
      'messages': error.message,
    });
  }
}

module.exports = {index, insert, patch, remove, removeMany};
