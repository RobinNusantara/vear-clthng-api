import { Category } from "@prisma/client";
import { ProductModel } from "@apps/models/ProductModel";

export class CategoryModel implements Category {
    id: number;

    categoryName: string;

    categoryLabel: string;

    products: Array<ProductModel>;

    createdAt: Date;

    updatedAt: Date;

    deletedAt: Date | null;
}
