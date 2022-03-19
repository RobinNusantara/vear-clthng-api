import { Material, MaterialType } from "@prisma/client";
import { ProductsMaterialsModel } from "@apps/models/ProductsMaterialsModel";

export class MaterialModel implements Material {
    id: number;

    materialType: MaterialType;

    materialName: string;

    products: Array<ProductsMaterialsModel>;

    createdAt: Date;

    updatedAt: Date;

    deletedAt: Date | null;
}
