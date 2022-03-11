import { interfaces } from "inversify";
import { IContainerInterface } from "@apps/common/interfaces/ContainerInterface";
// Users
import { UserService } from "@apps/services/UserService";
import { AuthService } from "@apps/services/AuthService";
// Areas
import { CountryService } from "@apps/services/CountryService";
import { ProvincyService } from "@apps/services/ProvincyService";
import { CityService } from "@apps/services/CityService";
// Products
import { ProductService } from "@apps/services/ProductService";

export const SERVICE_TYPES = {
    // Users
    AuthService: Symbol.for("AuthService"),
    UserService: Symbol.for("UserService"),
    // Areas
    CountryService: Symbol.for("CountryService"),
    ProvincyService: Symbol.for("ProvincyService"),
    CityService: Symbol.for("CityService"),
    // Products
    ProductService: Symbol.for("ProductService"),
};

const containers: Array<IContainerInterface> = [
    // Users
    {
        type: SERVICE_TYPES.AuthService,
        class: AuthService,
    },
    {
        type: SERVICE_TYPES.UserService,
        class: UserService,
    },
    // Areas
    {
        type: SERVICE_TYPES.CountryService,
        class: CountryService,
    },
    {
        type: SERVICE_TYPES.ProvincyService,
        class: ProvincyService,
    },
    {
        type: SERVICE_TYPES.CityService,
        class: CityService,
    },
    // Products
    {
        type: SERVICE_TYPES.ProductService,
        class: ProductService,
    },
];

export function services(bind: interfaces.Bind): void {
    return containers.forEach((container) => {
        bind(container.type).to(Object(container.class));
    });
}
