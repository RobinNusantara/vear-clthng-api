import multer, { memoryStorage, Multer } from "multer";
import { UnsupportedMediaType } from "http-errors";
import path from "path";

export class UploadFile {
    public static requestForm(fileTypes: RegExp, fileSize: number): Multer {
        return multer({
            storage: memoryStorage(),
            fileFilter: (req, file, callback) => {
                const extname = path.extname(file.originalname).toLowerCase();

                const isFileExtensionValid = fileTypes.test(extname);
                const isMimeTypeValid = fileTypes.test(file.mimetype);

                if (!isFileExtensionValid && !isMimeTypeValid) {
                    const message = `Unsupported Media Type: Only ${fileTypes} are allowed`;
                    const error = new UnsupportedMediaType(message);

                    callback(error);
                }

                callback(null, true);
            },
            limits: {
                fileSize,
            },
        });
    }
}
