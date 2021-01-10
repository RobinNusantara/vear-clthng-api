const {PrismaClient} = require('@prisma/client');
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
        'status': 'ok',
        'messages': 'Your wishlist is empty',
        'data': [],
      });
    } else {
      return res.status(201).json({
        'status': 'ok',
        'messages': '',
        'data': wishlist,
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

    const favorites = await prisma.wishlist.findMany({
      where: {
        ownerId: id,
      },
    });

    const isWishlistExist = favorites.filter((favorite) => favorite.collectionId === collectionId);

    if (!!isWishlistExist.length) {
      return res.status(400).json({
        'status': 'error',
        'messages': 'This item already in your wishlist',
      });
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
      'status': 'ok',
      'messages': '',
      'data': wishlist,
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

    const wishlist = await prisma.wishlist.delete({
      where: {
        id: parseInt(id),
      },
    });

    res.status(201).json({
      'status': 'ok',
      'messages': '',
      'data': wishlist,
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

    const wishlist = await prisma.wishlist.deleteMany({
      where: {
        ownerId: id,
      },
    });

    res.status(201).json({
      'status': 'ok',
      'messages': 'Successfully removed all items in your wishlist',
      'data': wishlist,
    });
  } catch (error) {
    res.status(400).json({
      'status': 'error',
      'messages': error.message,
    });
  }
}

module.exports = {index, insert, remove, removeMany};
