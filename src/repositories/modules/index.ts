import { interfaces } from "inversify";
import { IContainerInterface } from "@apps/common/interfaces/ContainerInterface";
import { UserRepository } from "@apps/repositories/UserRepository";

export const REPOSITORY_TYPES = {
    UserRepository: Symbol.for("UserRepository"),
};

const containers: Array<IContainerInterface> = [
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
