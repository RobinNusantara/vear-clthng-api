import { interfaces } from "inversify";
import { IContainerInterface } from "@apps/common/interfaces/ContainerInterface";
// User
import { UserRepository } from "@apps/repositories/UserRepository";
import { UserTokenRepository } from "@apps/repositories/UserTokenRepository";
import { ProductRepository } from "@apps/repositories/ProductRepository";

export const REPOSITORY_TYPES = {
    // Users
    UserRepository: Symbol.for("UserRepository"),
    UserTokenRepository: Symbol.for("UserTokenRepository"),
    ProductRepository: Symbol.for("ProductRepository"),
};

const containers: Array<IContainerInterface> = [
    // Users
    {
        type: REPOSITORY_TYPES.UserRepository,
        class: UserRepository,
    },
    {
        type: REPOSITORY_TYPES.UserTokenRepository,
        class: UserTokenRepository,
    },
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
