import { Repository } from "@apps/common/base/Repository";
import { IDataPagination } from "@apps/common/interfaces/DataPaginationInterface";
import { BrandModel } from "@apps/models/BrandModel";
import { ColorModel } from "@apps/models/ColorModel";
import { ProductModel } from "@apps/models/ProductModel";
import { VariantModel } from "@apps/models/VariantModel";
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

        const data = await ProductModel.scope("isActive").findAndCountAll({
            offset,
            limit,
            distinct: true,
            include: [
                {
                    model: BrandModel,
                },
                {
                    model: VariantModel,
                    include: [
                        {
                            model: ColorModel,
                        },
                    ],
                },
            ],
        });

        return {
            count: data.count,
            rows: data.rows,
        };
    }

    index(): Promise<ProductModel | null> {
        throw new Error("Method not implemented.");
    }

    update(): Promise<string | number> {
        throw new Error("Method not implemented.");
    }

    delete(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
