import {
    CountryDto,
    CreateCountryDto,
    UpdateCountryDto,
} from "@apps/dtos/CountryDto";
import { CountryRepository } from "@apps/repositories/CountryRepository";
import { REPOSITORY_TYPES } from "@apps/repositories/modules";
import { ProvincyRepository } from "@apps/repositories/ProvincyRepository";
import { CountryValidation } from "@apps/validations/CountryValidation";
import { VALIDATION_TYPES } from "@apps/validations/modules";
import { NotFound, UnprocessableEntity } from "http-errors";
import { inject, injectable } from "inversify";

@injectable()
export class CountryService {
    constructor(
        @inject(REPOSITORY_TYPES.CountryRepository)
        private readonly _countryRepository: CountryRepository,
        @inject(REPOSITORY_TYPES.ProvincyRepository)
        private readonly _provincyRepository: ProvincyRepository,
        @inject(VALIDATION_TYPES.CountryValidation)
        private readonly _countryValidation: CountryValidation,
    ) {}

    async insertCountry(body: CreateCountryDto): Promise<CountryDto> {
        const country = await this._countryRepository.insert({
            body,
        });

        return CountryDto.fromCountryModel(country);
    }

    async getCountries(countryName: string): Promise<Array<CountryDto>> {
        const countries = await this._countryRepository.indexes({
            filterCountry: {
                countryName,
            },
        });

        return countries.map((country) => CountryDto.fromCountryModel(country));
    }

    async getCountry(countryId: string): Promise<CountryDto> {
        const country = await this._countryRepository.findByIdCountryProvinces({
            countryId,
        });

        if (!country) throw new NotFound("Country not found!");

        return CountryDto.fromCountryProvincesModel(country);
    }

    async updateCountry(
        countryId: string,
        body: UpdateCountryDto,
    ): Promise<CountryDto> {
        await this._countryValidation.isCountryExists(countryId);

        const country = await this._countryRepository.update({
            countryId,
            body,
        });

        return CountryDto.fromCountryModel(country);
    }

    async removeCountry(countryId: string): Promise<boolean> {
        await this._countryValidation.isCountryExists(countryId);

        const totalProvincies = await this._provincyRepository.countProvincies({
            countryId,
        });

        if (totalProvincies > 1) {
            throw new UnprocessableEntity(
                "Cannot delete country because the record is associated with other data that cannot be deleted",
            );
        }

        return await this._countryRepository.delete({ countryId });
    }
}
