import { Repository } from "@apps/common/base/Repository";
import { CreateProvincyDto, UpdateProvincyDto } from "@apps/dtos/ProvincyDto";
import { City, Provincy } from "@prisma/client";
import { injectable } from "inversify";

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

    async indexes(): Promise<Array<Provincy>> {
        throw new Error("Method not implemented.");
    }

    async index(params: { provincyId: string }): Promise<Provincy | null> {
        const { provincyId } = params;

        const provincy = await this._prisma.provincy.findUnique({
            where: {
                id: provincyId,
            },
        });

        return provincy;
    }

    async update(params: {
        provincyId: string;
        body: UpdateProvincyDto;
    }): Promise<Provincy> {
        const { provincyId, body } = params;

        const provincy = await this._prisma.provincy.upsert({
            where: {
                id: provincyId,
            },
            update: {
                idCountryFk: body.countryId,
                provincyName: body.provincyName,
            },
            create: {
                idCountryFk: body.countryId,
                provincyName: body.provincyName,
            },
        });

        return provincy;
    }

    async delete(params: { provincyId: string }): Promise<boolean> {
        const { provincyId } = params;

        await this._prisma.provincy.delete({
            where: {
                id: provincyId,
            },
        });

        return true;
    }

    async countProvincies(params: { countryId: string }): Promise<number> {
        const { countryId } = params;

        const total = await this._prisma.provincy.count({
            where: {
                idCountryFk: countryId,
            },
        });

        return total;
    }

    // Query Provincy by id associate with cities
    async findByIdProvincyCities(params: {
        provincyId: string;
    }): Promise<(Provincy & { cities: Array<City> }) | null> {
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
