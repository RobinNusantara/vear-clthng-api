import { interfaces } from "inversify";
import { IContainerInterface } from "@apps/common/interfaces/ContainerInterface";
import { ProductRepository } from "@apps/repositories/ProductRepository";
import { UserRepository } from "@apps/repositories/UserRepository";
import { UserTokenRepository } from "@apps/repositories/UserTokenRepository";
import { VariantRepository } from "@apps/repositories/VariantRepository";

export const REPOSITORY_TYPES = {
    ProductRepository: Symbol.for("ProductRepository"),
    UserRepository: Symbol.for("UserRepository"),
    UserTokenRepository: Symbol.for("UserTokenRepository"),
    VariantRepository: Symbol.for("VariantRepository"),
};

const containers: Array<IContainerInterface> = [
    {
        type: REPOSITORY_TYPES.ProductRepository,
        class: ProductRepository,
    },
    {
        type: REPOSITORY_TYPES.UserRepository,
        class: UserRepository,
    },
    {
        type: REPOSITORY_TYPES.UserTokenRepository,
        class: UserTokenRepository,
    },
    {
        type: REPOSITORY_TYPES.VariantRepository,
        class: VariantRepository,
    },
];

export function repositories(bind: interfaces.Bind): void {
    return containers.forEach((container) => {
        bind(container.type).to(Object(container.class));
    });
}
