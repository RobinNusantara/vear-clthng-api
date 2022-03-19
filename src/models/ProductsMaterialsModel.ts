import { MaterialsOnProducts } from "@prisma/client";
import { MaterialModel } from "@apps/models/MaterialModel";
import { ProductModel } from "@apps/models/ProductModel";

export class ProductsMaterialsModel implements MaterialsOnProducts {
    idProductFk: number;

    idMaterialFk: number;

    product: ProductModel;

    material: MaterialModel;
}
