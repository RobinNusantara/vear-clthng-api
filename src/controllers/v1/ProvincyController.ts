import { Controller } from "@apps/common/base/Controller";
import {
    access,
    Authentication,
} from "@apps/common/middlewares/AuthenticationMiddleware";
import { ValidateData } from "@apps/common/middlewares/ValidateDataMiddleware";
import { CreateProvincyDto, UpdateProvincyDto } from "@apps/dtos/ProvincyDto";
import { SERVICE_TYPES } from "@apps/services/modules";
import { ProvincyService } from "@apps/services/ProvincyService";
import { inject } from "inversify";
import {
    controller,
    httpDelete,
    httpGet,
    httpPost,
    httpPut,
    requestBody,
    requestParam,
} from "inversify-express-utils";
import { JsonResult } from "inversify-express-utils/lib/results";

@controller("/v1/provinces")
export class ProvincyController extends Controller {
    constructor(
        @inject(SERVICE_TYPES.ProvincyService)
        private readonly _provincyService: ProvincyService,
    ) {
        super();
    }

    @httpGet("/:provincyId")
    async getProvincy(
        @requestParam("provincyId") provincyId: string,
    ): Promise<JsonResult> {
        const data = await this._provincyService.getProvincy(provincyId);

        return this.response(data);
    }

    /**
     * These routes only access by admin
     */

    @httpPost(
        "/",
        Authentication.verify({ roles: access["Admin"] }),
        ValidateData.requestBody(CreateProvincyDto),
    )
    async insertProvincy(
        @requestBody() body: CreateProvincyDto,
    ): Promise<JsonResult> {
        const data = await this._provincyService.insertProvincy(body);

        return this.response(data);
    }

    @httpPut(
        "/:provincyId",
        Authentication.verify({ roles: access["Admin"] }),
        ValidateData.requestBody(UpdateProvincyDto),
    )
    async updateProvincy(
        @requestParam("provincyId") provincyId: string,
        @requestBody() body: UpdateProvincyDto,
    ): Promise<JsonResult> {
        const data = await this._provincyService.updateProvincy(
            provincyId,
            body,
        );

        return this.response(data);
    }

    @httpDelete(
        "/:provincyId",
        Authentication.verify({ roles: access["Admin"] }),
    )
    async removeProvincy(
        @requestParam("provincyId") provincyId: string,
    ): Promise<JsonResult> {
        const data = await this._provincyService.removeProvincy(provincyId);

        return this.response(data);
    }
}
