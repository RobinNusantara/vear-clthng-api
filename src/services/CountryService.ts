import {
    CountryDto,
    CreateCountryDto,
    UpdateCountryDto,
} from "@apps/dtos/CountryDto";
import { CountryRepository } from "@apps/repositories/CountryRepository";
import { REPOSITORY_TYPES } from "@apps/repositories/modules";
import { CountryValidation } from "@apps/validations/CountryValidation";
import { VALIDATION_TYPES } from "@apps/validations/modules";
import { NotFound } from "http-errors";
import { inject, injectable } from "inversify";

@injectable()
export class CountryService {
    constructor(
        @inject(REPOSITORY_TYPES.CountryRepository)
        private readonly _countryRepository: CountryRepository,
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

        return {
            id: country.id,
            countryName: country.countryName,
            provinces: country.provinces.map((provincy) => ({
                id: provincy.id,
                provincyName: provincy.provincyName,
            })),
        };
    }

    async updateCountry(body: UpdateCountryDto): Promise<CountryDto> {
        const country = await this._countryRepository.update({ body });

        return CountryDto.fromCountryModel(country);
    }

    async removeCountry(countryId: string): Promise<boolean> {
        await this._countryValidation.isCountryExists(countryId);

        return await this._countryRepository.delete({ countryId });
    }
}
