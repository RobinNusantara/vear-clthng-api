import { RupiahFormatter } from "@apps/common/formatter/RupiahFormatter";
import { ProductModel } from "@apps/models/ProductModel";
import { VariantDto } from "@apps/dtos/VariantDto";

export class ProductDto {
    id: number;

    name: string;

    brand: string;

    category: string;

    description: string | null;

    price: string;

    variants?: Array<VariantDto>;

    public static fromProductModel(product: ProductModel): ProductDto {
        return {
            id: product.id,
            name: product.productName,
            brand: product.brand.brandName,
            category: product.category.categoryLabel,
            description: product.productDescription,
            price: RupiahFormatter.formatCurrency(product.productPrice),
            variants: product.variants.map((variant) => ({
                color: variant.color.colorName,
                hex: variant.color.colorValue,
                pictures: variant.pictures.map((picture) => ({
                    url: picture.imageUrl,
                })),
            })),
        };
    }
}
