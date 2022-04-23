import { CurrencyFormatter } from "@apps/common/formatter/CurrencyFormatter";
import { ProductModel } from "@apps/models/ProductModel";
import { VariantDto } from "./VariantDto";

export class ProductDto {
    id: string;

    name: string;

    brand: string;

    price: string;

    description: string;

    variants: Array<VariantDto>;

    public static fromProductModel(model: ProductModel): ProductDto {
        return {
            id: model.getDataValue("id"),
            name: model.getDataValue("name"),
            brand: model.brand.getDataValue("name"),
            // eslint-disable-next-line prettier/prettier
            price: CurrencyFormatter.formatToRupiah(model.getDataValue("price")),
            description: model.getDataValue("description"),
            variants: model.variants.map((variant) => {
                return VariantDto.fromVariantModel(variant);
            }),
        };
    }
}
