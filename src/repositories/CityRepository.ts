import { Repository } from "@apps/common/base/Repository";
import { CreateCityDto, UpdateCityDto } from "@apps/dtos/CityDto";
import { City } from "@prisma/client";
import { injectable } from "inversify";

@injectable()
export class CityRepository extends Repository<City> {
    async insert(params: { body: CreateCityDto }): Promise<City> {
        const { body } = params;

        const city = await this._prisma.city.create({
            data: {
                idProvincyFk: body.provincyId,
                cityName: body.cityName,
            },
        });

        return city;
    }

    indexes(): Promise<Array<City>> {
        throw new Error("Method not implemented.");
    }

    async index(params: { cityId: string }): Promise<City | null> {
        const { cityId } = params;

        const city = await this._prisma.city.findUnique({
            where: {
                id: cityId,
            },
        });

        return city;
    }

    async update(params: {
        cityId: string;
        body: UpdateCityDto;
    }): Promise<City> {
        const { cityId, body } = params;
        const { provincyId, cityName } = body;

        const city = await this._prisma.city.upsert({
            where: {
                id: cityId,
            },
            update: {
                idProvincyFk: provincyId,
                cityName,
            },
            create: {
                idProvincyFk: provincyId,
                cityName,
            },
        });

        return city;
    }

    async delete(params: { cityId: string }): Promise<boolean> {
        const { cityId } = params;

        await this._prisma.city.delete({
            where: {
                id: cityId,
            },
        });

        return true;
    }

    async countCities(params: { provincyId: string }): Promise<number> {
        const { provincyId } = params;

        const total = await this._prisma.city.count({
            where: {
                idProvincyFk: provincyId,
            },
        });

        return total;
    }
}
