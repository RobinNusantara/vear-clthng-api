import { CurrencyFormatter } from "@apps/common/formatter/CurrencyFormatter";
import { ProductModel } from "@apps/models/ProductModel";
import { VariantDto } from "@apps/dtos/VariantDto";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { MaterialDto } from "./MaterialDto";

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    brandId: number;

    @IsNotEmpty()
    @IsNumber()
    categoryId: number;

    @IsOptional()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    variants: Array<CreateProductVariantDto>;

    materials: Array<CreateProductMaterialDto>;
}

export class CreateProductVariantDto {
    @IsNotEmpty()
    @IsNumber()
    colorId: number;
}

export class CreateProductMaterialDto {
    @IsNotEmpty()
    @IsNumber()
    materialId: number;
}

export class ProductDto {
    id: number;

    name: string;

    brand: string;

    category: string;

    description: string | null;

    price: string;

    variants?: Array<VariantDto>;

    materials?: Array<MaterialDto>;

    public static iterateProductModel(
        products: Array<ProductModel>,
    ): Array<ProductDto> {
        return products.map((product) => ({
            id: product.id,
            name: product.productName,
            brand: product.brand.brandName,
            category: product.category.categoryLabel,
            description: product.productDescription,
            price: CurrencyFormatter.formatToRupiah(product.productPrice),
        }));
    }

    public static fromProductModel(product: ProductModel): ProductDto {
        return {
            id: product.id,
            name: product.productName,
            brand: product.brand.brandName,
            category: product.category.categoryLabel,
            description: product.productDescription,
            price: CurrencyFormatter.formatToRupiah(product.productPrice),
            variants: product.variants.map((variant) => ({
                color: variant.color.colorName,
                hex: variant.color.colorValue,
                pictures: variant.pictures.map((picture) => ({
                    url: picture.imageUrl,
                })),
            })),
            materials: product.materials.map((material) => ({
                type: material.material.materialType,
                name: material.material.materialName,
            })),
        };
    }
}
