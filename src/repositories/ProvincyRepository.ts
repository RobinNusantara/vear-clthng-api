import { Repository } from "@apps/common/base/Repository";
import { IFilterProvincy } from "@apps/common/interfaces/FilterProvincyInterface";
import { CreateProvincyDto } from "@apps/dtos/ProvincesDto";
import { City, Prisma, Provincy } from "@prisma/client";
import { injectable } from "inversify";

type ProvincyHasManyCities = Provincy & { cities: Array<City> };

@injectable()
export class ProvincyRepository extends Repository<Provincy> {
    async insert(params: { body: CreateProvincyDto }): Promise<Provincy> {
        const { body } = params;

        const provincy = await this._prisma.provincy.create({
            data: {
                idCountryFk: body.countryId,
                provincyName: body.provincyName,
            },
        });

        return provincy;
    }

    async indexes(params: {
        filterProvincy: IFilterProvincy;
    }): Promise<Array<Provincy>> {
        const { filterProvincy } = params;

        const where = this.provincyWhereInput(filterProvincy);

        const provinces = await this._prisma.provincy.findMany({
            where,
            orderBy: {
                provincyName: "asc",
            },
        });

        return provinces;
    }
    index(): Promise<Provincy | null> {
        throw new Error("Method not implemented.");
    }

    update(): Promise<Provincy> {
        throw new Error("Method not implemented.");
    }
    delete(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    // Filter Provincy
    private provincyWhereInput(
        filter: IFilterProvincy,
    ): Prisma.ProvincyWhereInput {
        const { provincyName } = filter;

        let where: Prisma.ProvincyWhereInput = {};

        if (!provincyName) {
            where = {
                provincyName,
            };
        }

        return where;
    }

    // Query Provincy by id associate with cities
    async findByIdProvincyCities(params: {
        provincyId: string;
    }): Promise<ProvincyHasManyCities | null> {
        const { provincyId } = params;

        const provincy = await this._prisma.provincy.findUnique({
            where: {
                id: provincyId,
            },
            include: {
                cities: {
                    orderBy: {
                        cityName: "asc",
                    },
                },
            },
        });

        return provincy;
    }
}
