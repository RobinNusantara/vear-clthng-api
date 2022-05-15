import { Controller } from "@apps/common/base/Controller";
import { UploadFile } from "@apps/middlewares/UploadFileMiddleware";
import { SERVICE_TYPES } from "@apps/services/modules";
import { FileService } from "@apps/services/FileService";
import {
    Access,
    Authentication,
} from "@apps/middlewares/AuthenticationMiddleware";
import { Request } from "express";
import { inject } from "inversify";
import { controller, httpPost, request } from "inversify-express-utils";
import { JsonResult } from "inversify-express-utils/lib/results";

@controller("/v1/files")
export class FileController extends Controller {
    constructor(
        @inject(SERVICE_TYPES.FileService)
        private readonly _fileService: FileService,
    ) {
        super();
    }

    @httpPost(
        "/product-pictures",
        Authentication.verify({ roles: Access["Admin"] }),
        UploadFile.requestForm(/jpeg|jpg|png/, 1024 * 1024).array("product", 6),
    )
    async insertProductPictures(@request() req: Request): Promise<JsonResult> {
        const files = req.files as Array<Express.Multer.File>;
        const data = await this._fileService.insertProductPictures(files);

        return this.response(data);
    }
}
