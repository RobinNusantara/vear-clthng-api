import { Repository } from "@apps/common/base/Repository";
import { IDataPagination } from "@apps/common/interfaces/DataPaginationInterface";
import { CreateVariantDto } from "@apps/dtos/VariantDto";
import { VariantModel } from "@apps/models/VariantModel";
import { Transaction } from "sequelize/types";

export class VariantRepository extends Repository<VariantModel> {
    public insert(): Promise<VariantModel> {
        throw new Error("Method not implemented.");
    }

    public async insertMany(
        body: Array<CreateVariantDto>,
        transaction?: Transaction,
    ): Promise<Array<VariantModel>> {
        const values: Array<VariantModel> = [];

        for (const data of body) {
            const variant = new VariantModel();

            variant.setDataValue("idProductFk", data.productId);
            variant.setDataValue("idColorFk", data.colorId);

            const value = variant.get() as VariantModel;

            values.push(value);
        }

        await VariantModel.bulkCreate(values, { transaction });

        return values;
    }

    public get(): Promise<VariantModel> {
        throw new Error("Method not implemented.");
    }
    public getMany(): Promise<Array<VariantModel>> {
        throw new Error("Method not implemented.");
    }

    public getAndCountAll(): Promise<IDataPagination<VariantModel>> {
        throw new Error("Method not implemented.");
    }

    public update(): Promise<string | number> {
        throw new Error("Method not implemented.");
    }

    public delete(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
