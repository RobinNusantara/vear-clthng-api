import { PictureDto } from "@apps/dtos/PictureDto";

export class CreateVariantDto {
    color: string;

    hex: string;
}

export class VariantDto {
    color: string;

    hex: string;

    pictures: Array<PictureDto>;
}
