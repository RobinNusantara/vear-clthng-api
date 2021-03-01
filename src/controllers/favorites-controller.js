const {PrismaClient} = require('@prisma/client');
const {ErrorHandler} = require('../helpers/error');

const prisma = new PrismaClient();

async function index(req, res, next) {
  try {
    const {id} = req.user;

    const wishlist = await prisma.user
        .findUnique({where: {id}})
        .favorites({include: {collection: {include: {images: true}}}});

    if (wishlist.length === 0) {
      return res.status(201).json({
        status: 'ok',
        message: 'Your shopping wishlist is empty',
        results: [],
      });
    } else {
      return res.status(201).json({
        status: 'ok',
        message: '',
        results: wishlist,
      });
    }
  } catch (error) {
    next(new ErrorHandler(400, error.message.toString()));
  }
}

async function insert(req, res, next) {
  try {
    const {id} = req.user;
    const {collectionId} = req.body;

    const favorites = await prisma.wishlist.findMany({
      where: {
        ownerId: id,
      },
    });

    const isWishlistExist = favorites.filter((favorite) => favorite.collectionId === collectionId);

    if (!!isWishlistExist.length) {
      throw new ErrorHandler(400, 'This product already in your shopping wishlist');
    }

    const wishlist = await prisma.wishlist.create({
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
      },
    });

    res.status(201).json({
      status: 'ok',
      message: 'Successfully inserted a product to your shopping wishlist',
      results: wishlist,
    });
    next();
  } catch (error) {
    next(new ErrorHandler(400, error.message.toString()));
  }
}

async function remove(req, res, next) {
  try {
    const {id} = req.params;

    const wishlist = await prisma.wishlist.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(201).json({
      status: 'ok',
      message: 'Successfully removed a product in your shopping wishlist',
      results: wishlist,
    });
  } catch (error) {
    next(new ErrorHandler(400, error.message.toString()));
  }
}

async function removeMany(req, res, next) {
  try {
    const {id} = req.user;

    const wishlist = await prisma.wishlist.deleteMany({
      where: {
        ownerId: id,
      },
    });

    res.status(201).json({
      status: 'ok',
      message: 'Successfully removed products in your shopping wishlist',
      results: wishlist,
    });
  } catch (error) {
    next(new ErrorHandler(400, error.message.toString()));
  }
}

module.exports = {index, insert, remove, removeMany};
