import { Repository } from "@apps/common/base/Repository";
import { IDataPagination } from "@apps/common/interfaces/DataPaginationInterface";
import { BrandModel } from "@apps/models/BrandModel";
import { ProductModel } from "@apps/models/ProductModel";
import { injectable } from "inversify";

@injectable()
export class ProductRepository extends Repository<ProductModel> {
    insert(params: Record<string, any>): Promise<ProductModel> {
        throw new Error("Method not implemented.");
    }

    async indexes(params: {
        offset: number;
        limit: number;
    }): Promise<IDataPagination<ProductModel>> {
        const { offset, limit } = params;

        const { count, rows } = await ProductModel.findAndCountAll({
            offset,
            limit,
            include: [
                {
                    model: BrandModel,
                },
            ],
        });

        return {
            count,
            rows,
        };
    }

    index(params: Record<string, any>): Promise<ProductModel | null> {
        throw new Error("Method not implemented.");
    }

    update(params: Record<string, any>): Promise<string | number> {
        throw new Error("Method not implemented.");
    }

    delete(params: Record<string, any>): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
