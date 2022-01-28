import { Country } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";
import { ProvincyDto } from "./ProvincesDto";

export class CreateCountryDto {
    @IsNotEmpty()
    @IsString()
    countryName: string;
}

export class CountryDto {
    id: string;

    countryName: string;

    provinces?: Array<ProvincyDto>;

    public static fromCountryModel(model: Country): CountryDto {
        return {
            id: model.id,
            countryName: model.countryName,
        };
    }
}
