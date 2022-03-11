import { Variant } from "@prisma/client";
import { ColorModel } from "@apps/models/ColorModel";
import { ProductModel } from "@apps/models/ProductModel";

export class VariantModel implements Variant {
    id: number;

    idProductFk: number;

    idColorFk: number;

    product: ProductModel;

    color: ColorModel;

    createdAt: Date;

    updatedAt: Date;

    deletedAt: Date | null;
}
