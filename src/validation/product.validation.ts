import { object, string, number } from 'joi';

const ProductSchema = object({
  productName: string().required(),
  productBrand: string().required(),
  productCategory: string().required(),
  productType: string().required(),
  productWeight: number().required(),
  productPrice: number().required(),
});

export default ProductSchema;
