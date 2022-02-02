import {
    CreateProvincyDto,
    ProvincyDto,
    UpdateProvincyDto,
} from "@apps/dtos/ProvincyDto";
import { REPOSITORY_TYPES } from "@apps/repositories/modules";
import { ProvincyRepository } from "@apps/repositories/ProvincyRepository";
import { NotFound, UnprocessableEntity } from "http-errors";
import { inject, injectable } from "inversify";
import { VALIDATION_TYPES } from "@apps/validations/modules";
import { CountryValidation } from "@apps/validations/CountryValidation";
import { ProvincyValidation } from "@apps/validations/ProvincyValidation";
import { CityRepository } from "@apps/repositories/CityRepository";

@injectable()
export class ProvincyService {
    constructor(
        @inject(REPOSITORY_TYPES.ProvincyRepository)
        private readonly _provincyRepository: ProvincyRepository,
        @inject(REPOSITORY_TYPES.CityRepository)
        private readonly _cityRepository: CityRepository,
        @inject(VALIDATION_TYPES.CountryValidation)
        private readonly _countryValidation: CountryValidation,
        @inject(VALIDATION_TYPES.ProvincyValidation)
        private readonly _provincyValidation: ProvincyValidation,
    ) {}

    async insertProvincy(body: CreateProvincyDto): Promise<ProvincyDto> {
        await this._countryValidation.isCountryExists(body.countryId);

        const provincy = await this._provincyRepository.insert({ body });

        return ProvincyDto.fromProvincyModel(provincy);
    }

    async getProvincy(provincyId: string): Promise<ProvincyDto> {
        const provincy = await this._provincyRepository.findByIdProvincyCities({
            provincyId,
        });

        if (!provincy) throw new NotFound("Provincy not found!");

        return ProvincyDto.fromProvincyCitiesModel(provincy);
    }

    async updateProvincy(
        provincyId: string,
        body: UpdateProvincyDto,
    ): Promise<ProvincyDto> {
        await this._provincyValidation.isProvincyExists(provincyId);

        await this._countryValidation.isCountryExists(body.countryId);

        const provincy = await this._provincyRepository.update({
            provincyId,
            body,
        });

        return ProvincyDto.fromProvincyModel(provincy);
    }

    async removeProvincy(provincyId: string): Promise<boolean> {
        await this._provincyValidation.isProvincyExists(provincyId);

        const totalCities = await this._cityRepository.countCities({
            provincyId,
        });

        if (totalCities > 1) {
            throw new UnprocessableEntity(
                "Cannot delete provincy because the record is associated with other data that cannot be deleted",
            );
        }

        return await this._provincyRepository.delete({ provincyId });
    }
}
