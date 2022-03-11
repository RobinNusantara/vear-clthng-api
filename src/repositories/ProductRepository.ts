import { Repository } from "@apps/common/base/Repository";
import { ProductModel } from "@apps/models/ProductModel";
import { injectable } from "inversify";

@injectable()
export class ProductRepository extends Repository<ProductModel> {
    insert(): Promise<ProductModel> {
        throw new Error("Method not implemented.");
    }

    indexes(): Promise<{ count: number; rows: Array<ProductModel> }> {
        throw new Error("Method not implemented.");
    }

    async index(params: { productId: number }): Promise<ProductModel> {
        const { productId } = params;

        const product = await this._prisma.product.findUnique({
            where: {
                id: productId,
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
            },
        });

        return product as ProductModel;
    }

    update(): Promise<ProductModel> {
        throw new Error("Method not implemented.");
    }

    delete(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
