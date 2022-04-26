import multer, { memoryStorage } from "multer";
import { UnsupportedMediaType } from "http-errors";
import path from "path";

export const UploadFile = (
    fileTypes: RegExp,
    maxFileSize: number,
): multer.Multer =>
    multer({
        storage: memoryStorage(),
        fileFilter: (req, file, callback) => {
            const extname = path.extname(file.originalname).toLowerCase();

            const isFileExtensionValid = fileTypes.test(extname);
            const isMimeTypeValid = fileTypes.test(file.mimetype);

            if (isFileExtensionValid && isMimeTypeValid) {
                return callback(null, true);
            } else {
                const message = `Unsupported Media Type: Only ${fileTypes} are allowed`;

                return callback(new UnsupportedMediaType(message));
            }
        },
        limits: {
            fileSize: maxFileSize,
        },
    });
