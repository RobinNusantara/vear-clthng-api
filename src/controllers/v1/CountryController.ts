import { Controller } from "@apps/common/base/Controller";
import { HttpStatus } from "@apps/common/enums/HttpStatusEnum";
import {
    access,
    Authentication,
} from "@apps/common/middlewares/AuthenticationMiddleware";
import { ValidateData } from "@apps/common/middlewares/ValidateDataMiddleware";
import { CreateCountryDto, UpdateCountryDto } from "@apps/dtos/CountryDto";
import { CountryService } from "@apps/services/CountryService";
import { SERVICE_TYPES } from "@apps/services/modules";
import { inject } from "inversify";
import {
    controller,
    httpDelete,
    httpGet,
    httpPost,
    httpPut,
    queryParam,
    requestBody,
    requestParam,
} from "inversify-express-utils";
import {
    JsonResult,
    StatusCodeResult,
} from "inversify-express-utils/lib/results";

@controller("/v1/countries")
export class CountryController extends Controller {
    constructor(
        @inject(SERVICE_TYPES.CountryService)
        private readonly _countryService: CountryService,
    ) {
        super();
    }

    @httpGet("/")
    async getCountries(
        @queryParam("country-name") countryName: string,
    ): Promise<JsonResult> {
        const data = await this._countryService.getCountries(countryName);
        console.log("Test Get Countries Routes");
        console.log("Test Get Countries Routes Again");
        return this.response(data);
    }

    @httpGet("/:countryId")
    async getCountry(
        @requestParam("countryId") countryId: string,
    ): Promise<JsonResult> {
        const data = await this._countryService.getCountry(countryId);

        return this.response(data);
    }

    /**
     * These routes only access by admin
     */

    @httpPost(
        "/",
        Authentication.verify({ roles: access["Admin"] }),
        ValidateData.requestBody(CreateCountryDto),
    )
    async insertCountry(
        @requestBody() body: CreateCountryDto,
    ): Promise<JsonResult> {
        const data = await this._countryService.insertCountry(body);

        return this.response(data);
    }

    @httpPut(
        "/:countryId",
        Authentication.verify({ roles: access["Admin"] }),
        ValidateData.requestBody(CreateCountryDto),
    )
    async updateCountry(
        @requestParam("countryId") countryId: string,
        @requestBody() body: UpdateCountryDto,
    ): Promise<JsonResult> {
        const data = await this._countryService.updateCountry(countryId, body);

        return this.response(data);
    }

    @httpDelete(
        "/:countryId",
        Authentication.verify({ roles: access["Admin"] }),
    )
    async removeCountry(
        @requestParam("countryId") countryId: string,
    ): Promise<StatusCodeResult> {
        await this._countryService.removeCountry(countryId);

        return this.statusCode(HttpStatus.NoContent);
    }
}
