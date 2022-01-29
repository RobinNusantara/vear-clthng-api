import { Controller } from "@apps/common/base/Controller";
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
import { JsonResult } from "inversify-express-utils/lib/results";

@controller("/v1/countries")
export class CountryController extends Controller {
    constructor(
        @inject(SERVICE_TYPES.CountryService)
        private readonly _countryService: CountryService,
    ) {
        super();
    }

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

    @httpGet("/")
    async getCountries(
        @queryParam("countryName") countryName: string,
    ): Promise<JsonResult> {
        const data = await this._countryService.getCountries(countryName);

        return this.response(data);
    }

    @httpGet("/:countryId")
    async getCountry(
        @requestParam("countryId") countryId: string,
    ): Promise<JsonResult> {
        const data = await this._countryService.getCountry(countryId);

        return this.response(data);
    }

    @httpPut(
        "/",
        Authentication.verify({ roles: access["Admin"] }),
        ValidateData.requestBody(CreateCountryDto),
    )
    async updateCountry(
        @requestBody() body: UpdateCountryDto,
    ): Promise<JsonResult> {
        const data = await this._countryService.updateCountry(body);

        return this.response(data);
    }

    @httpDelete(
        "/:countryId",
        Authentication.verify({ roles: access["Admin"] }),
        ValidateData.requestBody(CreateCountryDto),
    )
    async removeCountry(
        @requestParam("countryId") countryId: string,
    ): Promise<JsonResult> {
        const data = await this._countryService.removeCountry(countryId);

        return this.response(data);
    }
}
