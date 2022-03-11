import { Variant } from "@prisma/client";
import { ColorModel } from "@apps/models/ColorModel";
import { PictureModel } from "@apps/models/PictureModel";
import { ProductModel } from "@apps/models/ProductModel";

export class VariantModel implements Variant {
    id: number;

    idProductFk: number;

    idColorFk: number;

    product: ProductModel;

    color: ColorModel;

    pictures: Array<PictureModel>;

    createdAt: Date;

    updatedAt: Date;

    deletedAt: Date | null;
}
