import { Controller } from "@apps/common/base/Controller";
import { UploadFile } from "@apps/middlewares/UploadFileMiddleware";
import { Request } from "express";
import { controller, httpPost, request } from "inversify-express-utils";
import { JsonResult } from "inversify-express-utils/lib/results";
import { inject } from "inversify";
import { SERVICE_TYPES } from "@apps/services/modules";
import { FileService } from "@apps/services/FileService";

@controller("/v1/files")
export class FileController extends Controller {
    constructor(
        @inject(SERVICE_TYPES.FileService)
        private readonly _fileService: FileService,
    ) {
        super();
    }

    @httpPost("/product-pictures", UploadFile(/jpeg|jpg|png/).array("product"))
    async insertProductPictures(@request() req: Request): Promise<JsonResult> {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const data = await this._fileService.insertProductPictures(req.files);

        return this.response(data);
    }
}
