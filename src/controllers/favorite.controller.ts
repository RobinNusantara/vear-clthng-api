import { Request, Response } from 'express';
import { PrismaClient, Wishlist } from '@prisma/client';
import { ProductWithImage } from '../model/product';
import Controller from '../utils/interfaces/controller.interface';

class FavoriteController implements Controller {
  public prisma = new PrismaClient();

  index = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.app.locals.user;

      const images: ProductWithImage = {
        select: {
          productImage: true,
        },
      };

      const favorites: Wishlist[] = await this.prisma.user
        .findUnique({ where: { id } })
        .favorites({ include: { collection: { include: { images } } } });

      if (favorites.length === 0) {
        return res.status(200).json({
          status: 'ok',
          message: 'Data is empty',
          results: [],
        });
      }

      return res.status(200).json({
        status: 'ok',
        message: 'Successful fetch data',
        results: favorites,
      });
    } catch (err) {
      return res.status(400).json({
        status: 'error',
        message: err.message,
      });
    }
  };

  insert = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.app.locals.user;
      const collection = req.query.collectionId as string;
      const productId = parseInt(collection);

      const favorites: Wishlist[] = await this.prisma.wishlist.findMany({
        where: { ownerId: id },
      });

      const isProductExists = favorites.find(
        (favorite) => favorite.collectionId === productId
      );

      if (isProductExists) {
        return res.status(400).json({
          status: 'error',
          message: 'This product already in your shopping wishlist',
        });
      }

      const favorite = await this.prisma.wishlist.create({
        data: {
          owner: { connect: { id } },
          collection: { connect: { id: productId } },
        },
      });

      return res.status(201).json({
        status: 'ok',
        message: 'Successfull insert data',
        results: favorite,
      });
    } catch (err) {
      return res.status(400).json({
        status: 'error',
        message: err.message,
      });
    }
  };

  select = async (req: Request, res: Response): Promise<Response> => {
    return res.send('');
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    return res.send('');
  };

  remove = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const collectionId = parseInt(id);

      const favorite = await this.prisma.wishlist.delete({
        where: { id: collectionId },
      });

      return res.status(200).json({
        status: 'ok',
        message: 'Successfull remove data',
        results: favorite,
      });
    } catch (err) {
      return res.status(400).json({
        status: 'error',
        message: err.message,
      });
    }
  };
}

export default new FavoriteController();
