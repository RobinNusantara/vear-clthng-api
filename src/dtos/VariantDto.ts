import { VariantModel } from "@apps/models/VariantModel";

export class CreateVariantDto {
    productId: string;

    colorId: number;
}

export class VariantDto {
    color: string;

    hexColor: string;

    public static fromVariantModel(model: VariantModel): VariantDto {
        return {
            color: model.color.getDataValue("name"),
            hexColor: model.color.getDataValue("hexColor"),
        };
    }
}
