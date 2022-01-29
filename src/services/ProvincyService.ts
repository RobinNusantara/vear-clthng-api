import { CreateProvincyDto, ProvincyDto } from "@apps/dtos/ProvincesDto";
import { REPOSITORY_TYPES } from "@apps/repositories/modules";
import { ProvincyRepository } from "@apps/repositories/ProvincyRepository";
import { inject, injectable } from "inversify";
import { VALIDATION_TYPES } from "@apps/validations/modules";
import { CountryValidation } from "@apps/validations/CountryValidation";

@injectable()
export class ProvincyService {
    constructor(
        @inject(REPOSITORY_TYPES.ProvincyRepository)
        private readonly _provincyRepository: ProvincyRepository,
        @inject(VALIDATION_TYPES.CountryValidation)
        private readonly _countryValidation: CountryValidation,
    ) {}

    async insertProvincy(body: CreateProvincyDto): Promise<ProvincyDto> {
        await this._countryValidation.isCountryExists(body.countryId);

        const provincy = await this._provincyRepository.insert({ body });

        return ProvincyDto.fromProvincyModel(provincy);
    }
}
