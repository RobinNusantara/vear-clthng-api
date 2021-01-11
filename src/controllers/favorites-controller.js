const {PrismaClient} = require('@prisma/client');
const {ErrorHandler} = require('../helpers/error');

const prisma = new PrismaClient();

async function index(req, res, next) {
  try {
    const {id} = req.user;

    const wishlist = await prisma.wishlist.findMany({
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

    if (wishlist.length === 0) {
      return res.status(201).json({
        status: 'ok',
        messages: 'Your shopping wishlist is empty',
        data: [],
      });
    } else {
      return res.status(201).json({
        status: 'ok',
        messages: '',
        data: wishlist,
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
      messages: 'Successfully inserted a product to your shopping wishlist',
      data: wishlist,
    });
    next();
  } catch (error) {
    next(error);
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
      messages: 'Successfully removed a product in your shopping wishlist',
      data: wishlist,
    });
  } catch (error) {
    next(error);
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
      messages: 'Successfully removed products in your shopping wishlist',
      data: wishlist,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {index, insert, remove, removeMany};
