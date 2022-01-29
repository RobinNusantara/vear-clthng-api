import { interfaces } from "inversify";
import { IContainerInterface } from "@apps/common/interfaces/ContainerInterface";
import { CountryValidation } from "@apps/validations/CountryValidation";

export const VALIDATION_TYPES = {
    CountryValidation: Symbol.for("CountryValidation"),
};

const containers: Array<IContainerInterface> = [
    {
        type: VALIDATION_TYPES.CountryValidation,
        class: CountryValidation,
    },
];

export function validations(bind: interfaces.Bind): void {
    return containers.forEach((container) => {
        bind(container.type).to(Object(container.class));
    });
}
