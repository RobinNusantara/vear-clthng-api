import { Provincy } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateProvincyDto {
    @IsNotEmpty()
    @IsString()
    countryId: string;

    @IsNotEmpty()
    @IsString()
    provincyName: string;
}

export class ProvincyDto {
    id: string;

    provincyName: string;

    public static fromProvincyModel(model: Provincy): ProvincyDto {
        return {
            id: model.id,
            provincyName: model.provincyName,
        };
    }
}
