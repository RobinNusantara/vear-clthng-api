import { Product } from "@prisma/client";
import { BrandModel } from "@apps/models/BrandModel";
import { CategoryModel } from "@apps/models/CategoryModel";
import { VariantModel } from "@apps/models/VariantModel";

export class ProductModel implements Product {
    id: number;

    idBrandFk: number;

    idCategoryFk: number;

    productName: string;

    productDescription: string | null;

    productPrice: number;

    brand: BrandModel;

    category: CategoryModel;

    variants: Array<VariantModel>;

    createdAt: Date;

    updatedAt: Date;

    deletedAt: Date | null;
}
