import { Repository } from "@apps/common/base/Repository";
import { IDataPagination } from "@apps/common/interfaces/DataPaginationInterface";
import { CreatePictureDto } from "@apps/dtos/PictureDto";
import { PictureModel } from "@apps/models/PictureModel";

export class PictureRepository extends Repository<PictureModel> {
    public insert(): Promise<PictureModel> {
        throw new Error("Method not implemented.");
    }

    public async insertMany(
        body: Array<CreatePictureDto>,
    ): Promise<Array<PictureModel>> {
        const values: Array<PictureModel> = [];

        for (const data of body) {
            const picture = new PictureModel();

            picture.setDataValue("imageUrl", data.imageUrl);

            const value = picture.get() as PictureModel;

            values.push(value);
        }

        await PictureModel.bulkCreate(values);

        return values;
    }

    public get(): Promise<PictureModel> {
        throw new Error("Method not implemented.");
    }

    public getMany(): Promise<Array<PictureModel>> {
        throw new Error("Method not implemented.");
    }

    public getAndCountAll(): Promise<IDataPagination<PictureModel>> {
        throw new Error("Method not implemented.");
    }

    public update(): Promise<string | number> {
        throw new Error("Method not implemented.");
    }

    public delete(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
