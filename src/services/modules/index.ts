import { interfaces } from "inversify";
import { IContainerInterface } from "@apps/common/interfaces/ContainerInterface";
import { AuthService } from "@apps/services/AuthService";
import { ProductService } from "@apps/services/ProductService";
import { FileService } from "@apps/services/FileService";

export const SERVICE_TYPES = {
    AuthService: Symbol.for("AuthService"),
    ProductService: Symbol.for("ProductService"),
    FileService: Symbol.for("FileService"),
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
    {
        type: SERVICE_TYPES.FileService,
        class: FileService,
    },
];

export function services(bind: interfaces.Bind): void {
    return containers.forEach((container) => {
        bind(container.type).to(Object(container.class));
    });
}
