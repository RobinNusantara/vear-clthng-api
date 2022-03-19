import { Repository } from "@apps/common/base/Repository";
import { IPaginate } from "@apps/common/interfaces/PaginateInterface";
import { IUniqueProps } from "@apps/common/interfaces/UniquePropsInterface";
import { ProductUniqueProp } from "@apps/common/types/ProductUniquePropType";
import { CreateProductDto } from "@apps/dtos/ProductDto";
import { ProductModel } from "@apps/models/ProductModel";
import { injectable } from "inversify";

@injectable()
export class ProductRepository extends Repository<ProductModel> {
    async insert(params: { body: CreateProductDto }): Promise<ProductModel> {
        const { body } = params;

        const product = await this._prisma.product.create({
            data: {
                productName: body.name,
                idBrandFk: body.brandId,
                idCategoryFk: body.categoryId,
                productDescription: body.description,
                productPrice: body.price,
                variants: {
                    createMany: {
                        data: body.variants.map((variant) => ({
                            idColorFk: variant.colorId,
                        })),
                    },
                },
                materials: {
                    createMany: {
                        data: body.materials.map((material) => ({
                            idMaterialFk: material.materialId,
                        })),
                    },
                },
            },
        });

        return product as ProductModel;
    }

    async indexes(params: {
        page: number;
        limit: number;
    }): Promise<IPaginate<ProductModel>> {
        const { page, limit } = params;

        const offset = (page - 1) * limit;

        const [count, rows] = await this._prisma.$transaction([
            this._prisma.product.count(),
            this._prisma.product.findMany({
                skip: offset,
                take: limit,
                include: {
                    brand: true,
                    category: true,
                },
            }),
        ]);

        return {
            count,
            rows: rows as Array<ProductModel>,
        };
    }

    async index(params: {
        props: IUniqueProps<ProductUniqueProp>;
    }): Promise<ProductModel> {
        const { props } = params;

        const product = await this._prisma.product.findUnique({
            where: {
                [props.key]: props.value,
            },
            include: {
                brand: true,
                category: true,
                variants: {
                    include: {
                        color: true,
                        pictures: true,
                    },
                },
                materials: {
                    include: {
                        material: true,
                    },
                },
            },
        });

        return product as ProductModel;
    }

    update(): Promise<ProductModel> {
        throw new Error("Method not implemented.");
    }

    async delete(params: { productId: number }): Promise<boolean> {
        const { productId } = params;

        await this._prisma.$transaction([
            this._prisma.variant.deleteMany({
                where: {
                    idProductFk: productId,
                },
            }),
            this._prisma.materialsOnProducts.deleteMany({
                where: {
                    idProductFk: productId,
                },
            }),
            this._prisma.product.delete({
                where: {
                    id: productId,
                },
            }),
        ]);

        return true;
    }
}
