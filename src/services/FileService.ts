import { injectable } from "inversify";
import { upload } from "@apps/infrastructures/storage/CloudinaryStorage";
import { DataUriUtil } from "@apps/common/utils/DataUriUtil";
import { ImageDto } from "@apps/dtos/ImageDto";

@injectable()
export class FileService {
    public async insertProductPictures(
        files: Array<Express.Multer.File>,
    ): Promise<Array<ImageDto>> {
        const images: Array<ImageDto> = [];

        for await (const file of files) {
            const image = await upload({
                file: DataUriUtil.convertBufferToString(
                    file.mimetype,
                    file.buffer,
                ),
                folder: "products",
            });

            images.push({
                imageUrl: image["secure_url"],
            });
        }

        return images;
    }
}
