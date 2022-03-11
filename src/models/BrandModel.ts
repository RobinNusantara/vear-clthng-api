import { Brand } from "@prisma/client";
import { ProductModel } from "@apps/models/ProductModel";

export class BrandModel implements Brand {
    id: number;

    brandName: string;

    products: Array<ProductModel>;

    createdAt: Date;

    updatedAt: Date;

    deletedAt: Date | null;
}
