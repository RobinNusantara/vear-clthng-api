import { interfaces } from "inversify";
import { IContainerInterface } from "@apps/common/interfaces/ContainerInterface";
import { UserService } from "@apps/services/UserService";
import { AuthService } from "@apps/services/AuthService";
import { CountryService } from "@apps/services/CountryService";
import { ProvincyService } from "@apps/services/ProvincyService";
import { CityService } from "@apps/services/CityService";

export const SERVICE_TYPES = {
    AuthService: Symbol.for("AuthService"),
    UserService: Symbol.for("UserService"),
    CountryService: Symbol.for("CountryService"),
    ProvincyService: Symbol.for("ProvincyService"),
    CityService: Symbol.for("CityService"),
};

const containers: Array<IContainerInterface> = [
    {
        type: SERVICE_TYPES.AuthService,
        class: AuthService,
    },
    {
        type: SERVICE_TYPES.UserService,
        class: UserService,
    },
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
];

export function services(bind: interfaces.Bind): void {
    return containers.forEach((container) => {
        bind(container.type).to(Object(container.class));
    });
}
