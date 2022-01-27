import { interfaces } from "inversify";
import { IContainerInterface } from "@apps/common/interfaces/ContainerInterface";
import { UserService } from "@apps/services/UserService";
import { AuthService } from "@apps/services/AuthService";

export const SERVICE_TYPES = {
    AuthService: Symbol.for("AuthService"),
    UserService: Symbol.for("UserService"),
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
];

export function services(bind: interfaces.Bind): void {
    return containers.forEach((container) => {
        bind(container.type).to(Object(container.class));
    });
}
