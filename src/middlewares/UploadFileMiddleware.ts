import multer, { memoryStorage } from "multer";
import { UnsupportedMediaType } from "http-errors";
import path from "path";

export const UploadFile = (filetypes: RegExp): multer.Multer =>
    multer({
        storage: memoryStorage(),
        fileFilter: (req, file, callback) => {
            const extname = path.extname(file.originalname).toLowerCase();

            const isFileExtensionValid = filetypes.test(extname);
            const isMimeTypeValid = filetypes.test(file.mimetype);

            if (isFileExtensionValid && isMimeTypeValid) {
                return callback(null, true);
            } else {
                const message = `Unsupported Media Type: Only ${filetypes} are allowed`;

                return callback(new UnsupportedMediaType(message));
            }
        },
    });
