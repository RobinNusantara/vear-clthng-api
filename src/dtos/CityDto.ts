import { City } from "@prisma/client";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCityDto {
    @IsNotEmpty()
    @IsString()
    provincyId: string;

    @IsNotEmpty()
    @IsString()
    cityName: string;
}

export class UpdateCityDto extends CreateCityDto {}

export class CityDto {
    cityId: string;

    cityName: string;

    public static fromCityModel(model: City): CityDto {
        return {
            cityId: model.id,
            cityName: model.cityName,
        };
    }
}
