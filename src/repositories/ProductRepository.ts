import { Repository } from "@apps/common/base/Repository";
import { IDataPagination } from "@apps/common/interfaces/DataPaginationInterface";
import { IUniqueProps } from "@apps/common/interfaces/UniquePropsInterface";
import { CreateProductDto } from "@apps/dtos/ProductDto";
import { BrandModel } from "@apps/models/BrandModel";
import { ColorModel } from "@apps/models/ColorModel";
import { ProductModel } from "@apps/models/ProductModel";
import { VariantModel } from "@apps/models/VariantModel";
import { injectable } from "inversify";
import { Includeable, Op, Transaction } from "sequelize";

@injectable()
export class ProductRepository extends Repository<ProductModel> {
    public async insert(
        body: CreateProductDto,
        transaction?: Transaction,
    ): Promise<ProductModel> {
        const product = new ProductModel();

        product.setDataValue("name", body.name);
        product.setDataValue("idBrandFk", body.brandId);
        product.setDataValue("price", body.price);
        product.setDataValue("description", body.description);

        await product.save({ transaction });

        return product;
    }

    public async insertMany(): Promise<Array<ProductModel>> {
        throw new Error("Method not implemented.");
    }

    public async get(
        props: IUniqueProps<"id" | "name">,
    ): Promise<ProductModel> {
        const include = this.productAssociation();

        const product = await ProductModel.scope("isActive").findOne({
            where: {
                [props.key]: {
                    [Op.eq]: props.value,
                },
            },
            include,
        });

        return product as ProductModel;
    }

    async getMany(): Promise<Array<ProductModel>> {
        throw new Error("Method not implemented.");
    }

    public async getAndCountAll(params: {
        offset: number;
        limit: number;
    }): Promise<IDataPagination<ProductModel>> {
        const { offset, limit } = params;

        const include = this.productAssociation();

        const data = await ProductModel.scope("isActive").findAndCountAll({
            offset,
            limit,
            distinct: true,
            include,
        });

        return {
            count: data.count,
            rows: data.rows,
        };
    }

    public update(): Promise<string | number> {
        throw new Error("Method not implemented.");
    }

    public delete(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    private productAssociation(): Array<Includeable> {
        return [
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
        ];
    }
}
