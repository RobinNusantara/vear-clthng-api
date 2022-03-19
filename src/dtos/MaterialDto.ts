import { MaterialType } from "@prisma/client";

export class MaterialDto {
    type: MaterialType;

    name: string;
}
