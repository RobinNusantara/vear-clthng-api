import { interfaces } from "inversify";
import { IContainerInterface } from "@apps/common/interfaces/ContainerInterface";
import { CountryValidation } from "@apps/validations/CountryValidation";
import { ProvincyValidation } from "@apps/validations/ProvincyValidation";

export const VALIDATION_TYPES = {
    CountryValidation: Symbol.for("CountryValidation"),
    ProvincyValidation: Symbol.for("ProvincyValidation"),
};

const containers: Array<IContainerInterface> = [
    {
        type: VALIDATION_TYPES.CountryValidation,
        class: CountryValidation,
    },
    {
        type: VALIDATION_TYPES.ProvincyValidation,
        class: ProvincyValidation,
    },
];

export function validations(bind: interfaces.Bind): void {
    return containers.forEach((container) => {
        bind(container.type).to(Object(container.class));
    });
}
