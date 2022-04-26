import Parser from "datauri/parser";
import path from "path";
import { InternalServerError } from "http-errors";

export class DataUriUtil {
    public static convertBufferToString(
        mimeType: string,
        buffer: Buffer,
    ): string {
        const extension = this.getFileExtension(mimeType);
        const parser = new Parser();

        parser.format(extension, buffer);

        const content = parser.content;

        if (content) {
            return content;
        } else {
            throw new InternalServerError();
        }
    }

    private static getFileExtension(mimeType: string) {
        return path.extname(mimeType).toLowerCase();
    }
}
