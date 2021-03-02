import { Request, Response } from 'express';
import { PrismaClient, Product } from '@prisma/client';
import { ProductWithColor, ProductWithImage } from '../model/product';
import Controller from '../utils/interfaces/controller.interface';

class ProductController implements Controller {
  public prisma = new PrismaClient();

  index = async (req: Request, res: Response): Promise<Response> => {
    try {
      const colors: ProductWithColor = {
        select: {
          productColor: true,
        },
      };

      const images: ProductWithImage = {
        select: {
          productImage: true,
        },
      };

      const products: Product[] = await this.prisma.product.findMany({
        include: { colors, images },
        orderBy: { createdAt: 'asc' },
      });

      if (products.length === 0) {
        return res.status(200).json({
          status: 'ok',
          message: 'Data is empty',
          results: [],
        });
      }

      return res.status(200).json({
        status: 'ok',
        message: 'Successfull fetch data',
        results: products,
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
      const {
        productName,
        productBrand,
        productCategory,
        productType,
        productWeight,
        productPrice,
      } = req.body;

      const product = await this.prisma.product.create({
        data: {
          productName,
          productBrand,
          productCategory,
          productType,
          productWeight,
          productPrice,
        },
      });

      return res.status(200).json({
        status: 'ok',
        message: 'Successfull insert data',
        results: product,
      });
    } catch (err) {
      return res.status(400).json({
        status: 'ok',
        message: err.message,
      });
    }
  };

  select = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const productId = parseInt(id);

      const colors: ProductWithColor = {
        select: {
          productColor: true,
        },
      };

      const images: ProductWithImage = {
        select: {
          productImage: true,
        },
      };

      const product = await this.prisma.product.findUnique({
        where: { id: productId },
        include: { colors, images },
      });

      return res.status(200).json({
        status: 'ok',
        message: 'Successfull fetch data',
        results: product,
      });
    } catch (err) {
      return res.status(400).json({
        status: 'error',
        message: err.message,
      });
    }
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    return res.send('create');
  };

  remove = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const productId = parseInt(id);

      const product = await this.prisma.product.delete({
        where: { id: productId },
      });

      return res.status(200).json({
        status: 'ok',
        message: 'Successfull remove data',
        results: product,
      });
    } catch (err) {
      return res.status(400).json({
        status: 'ok',
        message: err.message,
      });
    }
  };
}

export default new ProductController();
