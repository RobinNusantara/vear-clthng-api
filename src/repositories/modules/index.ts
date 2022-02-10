import { interfaces } from "inversify";
import { IContainerInterface } from "@apps/common/interfaces/ContainerInterface";
import { UserRepository } from "@apps/repositories/UserRepository";
import { CountryRepository } from "@apps/repositories/CountryRepository";
import { ProvincyRepository } from "@apps/repositories/ProvincyRepository";
import { CityRepository } from "@apps/repositories/CityRepository";

export const REPOSITORY_TYPES = {
    UserRepository: Symbol.for("UserRepository"),
    CountryRepository: Symbol.for("CountryRepository"),
    ProvincyRepository: Symbol.for("ProvincyRepository"),
    CityRepository: Symbol.for("CityRepository"),
};

const containers: Array<IContainerInterface> = [
    {
        type: REPOSITORY_TYPES.UserRepository,
        class: UserRepository,
    },
    {
        type: REPOSITORY_TYPES.CountryRepository,
        class: CountryRepository,
    },
    {
        type: REPOSITORY_TYPES.ProvincyRepository,
        class: ProvincyRepository,
    },
    {
        type: REPOSITORY_TYPES.CityRepository,
        class: CityRepository,
    },
];

export function repositories(bind: interfaces.Bind): void {
    return containers.forEach((container) => {
        bind(container.type).to(Object(container.class));
    });
}
