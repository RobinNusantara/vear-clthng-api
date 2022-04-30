import { inject, injectable } from "inversify";
import { upload } from "@apps/infrastructures/storage/CloudinaryStorage";
import { DataUriUtil } from "@apps/common/utils/DataUriUtil";
import { CreatePictureDto, PictureDto } from "@apps/dtos/PictureDto";
import { REPOSITORY_TYPES } from "@apps/repositories/modules";
import { PictureRepository } from "@apps/repositories/PictureRepository";

@injectable()
export class FileService {
    constructor(
        @inject(REPOSITORY_TYPES.PictureRepository)
        private readonly _pictureRepository: PictureRepository,
    ) {}

    public async insertProductPictures(
        files: Array<Express.Multer.File>,
    ): Promise<Array<PictureDto>> {
        const images: Array<CreatePictureDto> = [];

        for await (const file of files) {
            const image = await upload({
                folder: "products",
                prefix: "product",
                file: DataUriUtil.convertBufferToString(
                    file.mimetype,
                    file.buffer,
                ),
            });

            images.push({
                imageUrl: image["secure_url"],
            });
        }

        const pictures = await this._pictureRepository.insertMany(images);

        return pictures.map((picture) => ({
            id: picture.id,
            imageUrl: picture.imageUrl,
        }));
    }
}
