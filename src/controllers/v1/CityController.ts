import { Controller } from "@apps/common/base/Controller";
import { HttpStatus } from "@apps/common/enums/HttpStatusEnum";
import {
    access,
    Authentication,
} from "@apps/middlewares/AuthenticationMiddleware";
import { ValidateData } from "@apps/middlewares/ValidateDataMiddleware";
import { CreateCityDto, UpdateCityDto } from "@apps/dtos/CityDto";
import { CityService } from "@apps/services/CityService";
import { SERVICE_TYPES } from "@apps/services/modules";
import { inject } from "inversify";
import {
    controller,
    httpDelete,
    httpPost,
    httpPut,
    requestBody,
    requestParam,
} from "inversify-express-utils";
import {
    JsonResult,
    StatusCodeResult,
} from "inversify-express-utils/lib/results";

@controller("/v1/cities")
export class CityController extends Controller {
    constructor(
        @inject(SERVICE_TYPES.CityService)
        private readonly _cityService: CityService,
    ) {
        super();
    }

    @httpPost(
        "/",
        Authentication.verify({ roles: access["Admin"] }),
        ValidateData.requestBody(CreateCityDto),
    )
    async insertCity(@requestBody() body: CreateCityDto): Promise<JsonResult> {
        const data = await this._cityService.insertCity(body);

        return this.response(data);
    }

    @httpPut(
        "/:cityId",
        Authentication.verify({ roles: access["Admin"] }),
        ValidateData.requestBody(UpdateCityDto),
    )
    async updateCity(
        @requestParam("cityId") cityId: string,
        @requestBody() body: UpdateCityDto,
    ): Promise<JsonResult> {
        const data = await this._cityService.updateCity(cityId, body);

        return this.response(data);
    }

    @httpDelete("/:cityId", Authentication.verify({ roles: access["Admin"] }))
    async removeCity(
        @requestParam("cityId") cityId: string,
    ): Promise<StatusCodeResult> {
        await this._cityService.removeCity(cityId);

        return this.statusCode(HttpStatus.NoContent);
    }
}
