import { REPOSITORY_TYPES } from "@apps/repositories/modules";
import { ProvincyRepository } from "@apps/repositories/ProvincyRepository";
import { NotFound } from "http-errors";
import { inject, injectable } from "inversify";

@injectable()
export class ProvincyValidation {
    constructor(
        @inject(REPOSITORY_TYPES.ProvincyRepository)
        private readonly _provincyRepository: ProvincyRepository,
    ) {}

    public async isProvincyExists(provincyId: string): Promise<boolean> {
        const country = await this._provincyRepository.index({
            provincyId,
        });

        if (!country) throw new NotFound("Provincy not found!");

        return true;
    }
}
