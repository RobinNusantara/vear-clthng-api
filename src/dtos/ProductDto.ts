import { CurrencyFormatter } from "@apps/common/formatter/CurrencyFormatter";
import { ProductModel } from "@apps/models/ProductModel";

export class ProductDto {
    id: string;

    name: string;

    brand: string;

    price: string;

    description: string;

    public static fromProductModel(model: ProductModel): ProductDto {
        return {
            id: model.getDataValue("id"),
            name: model.getDataValue("name"),
            brand: model.brand.getDataValue("name"),
            price: CurrencyFormatter.formatToRupiah(
                model.getDataValue("price"),
            ),
            description: model.getDataValue("description"),
        };
    }
}
