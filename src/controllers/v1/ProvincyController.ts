import { Controller } from "@apps/common/base/Controller";
import {
    access,
    Authentication,
} from "@apps/common/middlewares/AuthenticationMiddleware";
import { ValidateData } from "@apps/common/middlewares/ValidateDataMiddleware";
import { CreateProvincyDto } from "@apps/dtos/ProvincesDto";
import { SERVICE_TYPES } from "@apps/services/modules";
import { ProvincyService } from "@apps/services/ProvincyService";
import { inject } from "inversify";
import { controller, httpPost, requestBody } from "inversify-express-utils";
import { JsonResult } from "inversify-express-utils/lib/results";

@controller("/v1/provinces")
export class ProvincyController extends Controller {
    constructor(
        @inject(SERVICE_TYPES.ProvincyService)
        private readonly _provincyService: ProvincyService,
    ) {
        super();
    }

    @httpPost(
        "/",
        Authentication.verify({ roles: access["*"] }),
        ValidateData.requestBody(CreateProvincyDto),
    )
    async insertProvincy(
        @requestBody() body: CreateProvincyDto,
    ): Promise<JsonResult> {
        const data = await this._provincyService.insertProvincy(body);

        return this.response(data);
    }
}
