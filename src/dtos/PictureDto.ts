import { PictureModel } from "@apps/models/PictureModel";

export class CreatePictureDto {
    imageUrl: string;
}

export class PictureDto {
    id: string;

    imageUrl: string;

    public static fromPictureModel(model: PictureModel): PictureDto {
        return {
            id: model.getDataValue("id"),
            imageUrl: model.getDataValue("imageUrl"),
        };
    }
}
