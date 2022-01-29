import { CountryRepository } from "@apps/repositories/CountryRepository";
import { REPOSITORY_TYPES } from "@apps/repositories/modules";
import { NotFound } from "http-errors";
import { inject, injectable } from "inversify";

@injectable()
export class CountryValidation {
    constructor(
        @inject(REPOSITORY_TYPES.CountryRepository)
        private readonly _countryRepository: CountryRepository,
    ) {}

    public async isCountryExists(countryId: string): Promise<boolean> {
        const country = await this._countryRepository.index({
            countryId,
        });

        if (!country) throw new NotFound("Country not found!");

        return true;
    }
}
