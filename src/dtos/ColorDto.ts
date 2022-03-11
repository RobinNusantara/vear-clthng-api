import { Color } from "@prisma/client";

export class ColorDto {
    id: number;

    name: string;

    value: string;

    public static fromColorModel(color: Color): ColorDto {
        return {
            id: color.id,
            name: color.colorName,
            value: color.colorValue,
        };
    }
}
