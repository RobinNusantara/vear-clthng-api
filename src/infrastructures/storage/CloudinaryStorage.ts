import { config } from "@apps/common/config/AppConfig";
import {
    v2 as cloudinary,
    UploadApiOptions,
    UploadApiResponse,
} from "cloudinary";
import { InternalServerError } from "http-errors";

cloudinary.config({
    cloud_name: config.storage.cloudName,
    api_key: config.storage.apiKey,
    api_secret: config.storage.apiSecret,
    secure: true,
});

export async function uploadSingleImage(args: {
    file: string;
    folder: string;
}): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
        const { file, folder } = args;

        const options: UploadApiOptions = {
            folder,
        };

        cloudinary.uploader.upload(file, options, (error, response) => {
            if (response) {
                resolve(response);
            } else {
                reject(new InternalServerError());
            }
        });
    });
}
