import { interfaces } from "inversify";
import { IContainerInterface } from "@apps/common/interfaces/ContainerInterface";
// User
import { UserRepository } from "@apps/repositories/UserRepository";
// Areas
import { CountryRepository } from "@apps/repositories/CountryRepository";
import { ProvincyRepository } from "@apps/repositories/ProvincyRepository";
import { CityRepository } from "@apps/repositories/CityRepository";
// Products
import { ProductRepository } from "@apps/repositories/ProductRepository";

export const REPOSITORY_TYPES = {
    // Users
    UserRepository: Symbol.for("UserRepository"),
    // Areas
    CountryRepository: Symbol.for("CountryRepository"),
    ProvincyRepository: Symbol.for("ProvincyRepository"),
    CityRepository: Symbol.for("CityRepository"),
    // Products
    ProductRepository: Symbol.for("ProductRepository"),
};

const containers: Array<IContainerInterface> = [
    // Users
    {
        type: REPOSITORY_TYPES.UserRepository,
        class: UserRepository,
    },
    // Areas
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
    // Products
    {
        type: REPOSITORY_TYPES.ProductRepository,
        class: ProductRepository,
    },
];

export function repositories(bind: interfaces.Bind): void {
    return containers.forEach((container) => {
        bind(container.type).to(Object(container.class));
    });
}
