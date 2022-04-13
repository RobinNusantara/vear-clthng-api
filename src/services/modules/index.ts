import { interfaces } from "inversify";
import { IContainerInterface } from "@apps/common/interfaces/ContainerInterface";
// Users
import { AuthService } from "@apps/services/AuthService";

export const SERVICE_TYPES = {
    // Users
    AuthService: Symbol.for("AuthService"),
};

const containers: Array<IContainerInterface> = [
    // Users
    {
        type: SERVICE_TYPES.AuthService,
        class: AuthService,
    },
];

export function services(bind: interfaces.Bind): void {
    return containers.forEach((container) => {
        bind(container.type).to(Object(container.class));
    });
}
