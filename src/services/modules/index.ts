import { interfaces } from "inversify";
import { IContainerInterface } from "@apps/common/interfaces/ContainerInterface";
import { AuthService } from "@apps/services/AuthService";
import { ProductService } from "@apps/services/ProductService";

export const SERVICE_TYPES = {
    AuthService: Symbol.for("AuthService"),
    ProductService: Symbol.for("ProductService"),
};

const containers: Array<IContainerInterface> = [
    {
        type: SERVICE_TYPES.AuthService,
        class: AuthService,
    },
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
