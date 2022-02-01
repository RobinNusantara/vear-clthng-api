import { City, Provincy } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";
import { CityDto } from "./CityDto";

export class CreateProvincyDto {
    @IsNotEmpty()
    @IsString()
    countryId: string;

    @IsNotEmpty()
    @IsString()
    provincyName: string;
}

export class UpdateProvincyDto extends CreateProvincyDto {}

export class ProvincyDto {
    provincyId: string;

    provincyName: string;

    cities?: Array<CityDto>;

    public static fromProvincyModel(model: Provincy): ProvincyDto {
        return {
            provincyId: model.id,
            provincyName: model.provincyName,
        };
    }

    public static fromProvincyCitiesModel(
        model: Provincy & { cities: Array<City> },
    ): ProvincyDto {
        const cities = model.cities.map((city) => ({
            cityId: city.id,
            cityName: city.cityName,
        }));

        return {
            provincyId: model.id,
            provincyName: model.provincyName,
            cities,
        };
    }
}
