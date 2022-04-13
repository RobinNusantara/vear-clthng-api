import { interfaces } from "inversify";
import { IContainerInterface } from "@apps/common/interfaces/ContainerInterface";
// User
import { UserRepository } from "@apps/repositories/UserRepository";

export const REPOSITORY_TYPES = {
    // Users
    UserRepository: Symbol.for("UserRepository"),
};

const containers: Array<IContainerInterface> = [
    // Users
    {
        type: REPOSITORY_TYPES.UserRepository,
        class: UserRepository,
    },
];

export function repositories(bind: interfaces.Bind): void {
    return containers.forEach((container) => {
        bind(container.type).to(Object(container.class));
    });
}
