import { Country, Provincy } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";
import { ProvincyDto } from "./ProvincyDto";

export class CreateCountryDto {
    @IsNotEmpty()
    @IsString()
    countryName: string;
}

export class UpdateCountryDto extends CreateCountryDto {}

export class CountryDto {
    countryId: string;

    countryName: string;

    provinces?: Array<ProvincyDto>;

    public static fromCountryModel(model: Country): CountryDto {
        return {
            countryId: model.id,
            countryName: model.countryName,
        };
    }

    public static fromCountryProvincesModel(
        model: Country & { provinces: Array<Provincy> },
    ): CountryDto {
        const provinces = model.provinces.map((provincy) => ({
            provincyId: provincy.id,
            provincyName: provincy.provincyName,
        }));

        return {
            countryId: model.id,
            countryName: model.countryName,
            provinces,
        };
    }
}
