import { CityDto, CreateCityDto, UpdateCityDto } from "@apps/dtos/CityDto";
import { CityRepository } from "@apps/repositories/CityRepository";
import { REPOSITORY_TYPES } from "@apps/repositories/modules";
import { CityValidation } from "@apps/validations/CityValidation";
import { VALIDATION_TYPES } from "@apps/validations/modules";
import { ProvincyValidation } from "@apps/validations/ProvincyValidation";
import { inject, injectable } from "inversify";

@injectable()
export class CityService {
    constructor(
        @inject(REPOSITORY_TYPES.CityRepository)
        private readonly _cityRepository: CityRepository,
        @inject(VALIDATION_TYPES.ProvincyValidation)
        private readonly _provincyValidation: ProvincyValidation,
        @inject(VALIDATION_TYPES.CityValidation)
        private readonly _cityValidation: CityValidation,
    ) {}

    async insertCity(body: CreateCityDto): Promise<CityDto> {
        await this._provincyValidation.isProvincyExists(body.provincyId);

        const city = await this._cityRepository.insert({ body });

        return CityDto.fromCityModel(city);
    }

    async updateCity(cityId: string, body: UpdateCityDto): Promise<CityDto> {
        await this._cityValidation.isCityExists(cityId);

        await this._provincyValidation.isProvincyExists(body.provincyId);

        const city = await this._cityRepository.update({
            cityId,
            body,
        });

        return CityDto.fromCityModel(city);
    }

    async removeCity(cityId: string): Promise<boolean> {
        await this._cityValidation.isCityExists(cityId);

        return this._cityRepository.delete({ cityId });
    }
}
