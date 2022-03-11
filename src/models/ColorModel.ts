import { Color } from "@prisma/client";
import { ProductModel } from "@apps/models/ProductModel";

export class ColorModel implements Color {
    id: number;

    colorName: string;

    colorValue: string;

    products: Array<ProductModel>;

    createdAt: Date;

    updatedAt: Date;

    deletedAt: Date | null;
}
