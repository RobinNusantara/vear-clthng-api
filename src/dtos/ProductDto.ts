import { CurrencyFormatter } from "@apps/common/formatter/CurrencyFormatter";
import { ProductModel } from "@apps/models/ProductModel";
import { Type } from "class-transformer";
import {
    IsArray,
    IsDefined,
    IsEmpty,
    IsNotEmpty,
    IsNumber,
    IsString,
    ValidateNested,
} from "class-validator";
import { VariantDto } from "./VariantDto";

export class CreateProductVariantDto {
    @IsNumber({}, { message: "Color Id must be a numeric value!" })
    colorId: number;
}

export class CreateProductDto {
    @IsString({ message: "Name must be a string!" })
    @IsNotEmpty({ message: "Name should not be empty!" })
    name: string;

    @IsNumber({}, { message: "Brand Id must be a numeric value!" })
    brandId: number;

    @IsNumber({}, { message: "Price must be a numeric value!" })
    price: number;

    @IsString({ message: "Description must be a string!" })
    @IsEmpty()
    description: string;

    @IsDefined()
    @IsArray({ message: "Variants must be type of array!" })
    @ValidateNested({ each: true })
    @Type(() => CreateProductVariantDto)
    variants: Array<CreateProductVariantDto>;
}

export class ProductDto {
    id: string;

    name: string;

    brand: string | null;

    price: string;

    description: string;

    variants: Array<VariantDto>;

    public static fromProductModel(model: ProductModel): ProductDto {
        return {
            id: model.getDataValue("id"),
            name: model.getDataValue("name"),
            brand: model.brand ? model.brand.getDataValue("name") : null,
            // eslint-disable-next-line prettier/prettier
            price: CurrencyFormatter.formatToRupiah(model.getDataValue("price")),
            description: model.getDataValue("description"),
            variants: model.variants.map((variant) => {
                return VariantDto.fromVariantModel(variant);
            }),
        };
    }
}
