import { CityRepository } from "@apps/repositories/CityRepository";
import { REPOSITORY_TYPES } from "@apps/repositories/modules";
import { NotFound } from "http-errors";
import { inject, injectable } from "inversify";

@injectable()
export class CityValidation {
    constructor(
        @inject(REPOSITORY_TYPES.CityRepository)
        private readonly _cityRepository: CityRepository,
    ) {}

    public async isCityExists(cityId: string): Promise<boolean> {
        const city = await this._cityRepository.index({ cityId });

        if (!city) throw new NotFound("City not found!");

        return true;
    }
}
