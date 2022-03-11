import { Picture } from "@prisma/client";
import { VariantModel } from "@apps/models/VariantModel";

export class PictureModel implements Picture {
    id: number;

    idVariantFk: number;

    imageUrl: string;

    variant: VariantModel;

    createdAt: Date;

    updatedAt: Date;

    deletedAt: Date | null;
}
