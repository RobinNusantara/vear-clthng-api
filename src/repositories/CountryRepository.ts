import { Repository } from "@apps/common/base/Repository";
import { injectable } from "inversify";
import { Country, Prisma, Provincy } from "@prisma/client";
import { CreateCountryDto, UpdateCountryDto } from "@apps/dtos/CountryDto";
import { IFilterCountry } from "@apps/common/interfaces/FilterCountryInterface";

@injectable()
export class CountryRepository extends Repository<Country> {
    async insert(params: { body: CreateCountryDto }): Promise<Country> {
        const { body } = params;

        const country = await this._prisma.country.create({
            data: {
                countryName: body.countryName,
            },
        });

        return country;
    }

    async indexes(params: {
        filterCountry: IFilterCountry;
    }): Promise<Array<Country>> {
        const { filterCountry } = params;

        const where = this.countryWhereInput(filterCountry);

        const countries = await this._prisma.country.findMany({
            where,
            orderBy: {
                countryName: "asc",
            },
        });

        return countries;
    }

    async index(params: { countryId: string }): Promise<Country | null> {
        const { countryId } = params;

        const country = await this._prisma.country.findUnique({
            where: {
                id: countryId,
            },
        });

        return country;
    }

    async update(params: {
        countryId: string;
        body: UpdateCountryDto;
    }): Promise<Country> {
        const { countryId, body } = params;
        const { countryName } = body;

        const country = await this._prisma.country.upsert({
            where: {
                id: countryId,
            },
            update: {
                countryName,
            },
            create: {
                countryName,
            },
        });

        return country;
    }

    async delete(params: { countryId: string }): Promise<boolean> {
        const { countryId } = params;

        await this._prisma.country.delete({
            where: {
                id: countryId,
            },
        });

        return true;
    }

    // Filter Country
    private countryWhereInput(
        filter: IFilterCountry,
    ): Prisma.CountryWhereInput {
        const { countryName } = filter;

        let where: Prisma.CountryWhereInput = {};

        if (countryName) {
            where = {
                countryName,
            };
        }

        return where;
    }

    // Query Country by id associate with provinces
    async findByIdCountryProvinces(params: {
        countryId: string;
    }): Promise<(Country & { provinces: Array<Provincy> }) | null> {
        const { countryId } = params;

        const country = await this._prisma.country.findUnique({
            where: {
                id: countryId,
            },
            include: {
                provinces: {
                    orderBy: {
                        provincyName: "asc",
                    },
                },
            },
        });

        return country;
    }
}
