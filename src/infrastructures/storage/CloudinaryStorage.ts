import { config } from "@apps/common/config/AppConfig";
import {
    v2 as cloudinary,
    UploadApiOptions,
    UploadApiResponse,
} from "cloudinary";
import { BadRequest } from "http-errors";
import { v4 as uuid } from "uuid";

cloudinary.config({
    cloud_name: config.storage.cloudName,
    api_key: config.storage.apiKey,
    api_secret: config.storage.apiSecret,
    secure: true,
});

export async function upload(args: {
    folder: string;
    prefix: string;
    file: string;
}): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
        const { folder, prefix, file } = args;

        const options: UploadApiOptions = {
            folder: `vear-clthng-storage/${folder}`,
            public_id: `${prefix}-${uuid()}`,
        };

        cloudinary.uploader.upload(file, options, (error, response) => {
            if (response) {
                resolve(response);
            } else {
                reject(new BadRequest(error?.message));
            }
        });
    });
}
