import { IDataPagination } from "@apps/common/interfaces/DataPaginationInterface";
import { ArrayUtil } from "@apps/common/utils/ArrayUtil";
import { CreateProductDto, ProductDto } from "@apps/dtos/ProductDto";
import { CreateVariantDto } from "@apps/dtos/VariantDto";
import { PrimeDatabase } from "@apps/infrastructures/database/PrimeDatabase";
import { REPOSITORY_TYPES } from "@apps/repositories/modules";
import { ProductRepository } from "@apps/repositories/ProductRepository";
import { VariantRepository } from "@apps/repositories/VariantRepository";
import { Conflict, NotFound } from "http-errors";
import { inject, injectable } from "inversify";

@injectable()
export class ProductService {
    constructor(
        @inject(REPOSITORY_TYPES.ProductRepository)
        private readonly _productRepository: ProductRepository,
        @inject(REPOSITORY_TYPES.VariantRepository)
        private readonly _variantRepository: VariantRepository,
    ) {}

    public async insertProduct(body: CreateProductDto): Promise<ProductDto> {
        await this.isProductExists(body.name);

        const colorIds = body.variants.map((variant) => variant.colorId);

        ArrayUtil.isArrayOfObjectHasDuplicateValue({
            mappedData: colorIds,
            arrayLength: colorIds.length,
            errorMessage: "Some of the Color(s) contains duplicate value",
        });

        const data = await PrimeDatabase.transaction(async (transaction) => {
            const product = await this._productRepository.insert(
                body,
                transaction,
            );

            const variants: Array<CreateVariantDto> = [];

            for (const variant of body.variants) {
                variants.push({
                    productId: product.getDataValue("id"),
                    colorId: variant.colorId,
                });
            }

            await this._variantRepository.insertMany(variants, transaction);

            return product;
        });

        const result = await this.getProduct(data.getDataValue("id"));

        return result;
    }

    public async getProducts(queries: {
        page: number;
        limit: number;
    }): Promise<IDataPagination<ProductDto>> {
        const page = queries.page || 1;
        const limit = queries.limit || 10;

        const offset = (page - 1) * limit;

        const { count, rows } = await this._productRepository.getAndCountAll({
            offset,
            limit,
        });

        const products = rows.map((row) => ProductDto.fromProductModel(row));

        return {
            count,
            rows: products,
        };
    }

    public async getProduct(id: string): Promise<ProductDto> {
        const product = await this._productRepository.get({
            key: "id",
            value: id,
        });

        if (!product) throw new NotFound("Product not found!");

        return ProductDto.fromProductModel(product);
    }

    private async isProductExists(name: string) {
        const product = await this._productRepository.get({
            key: "name",
            value: name,
        });

        if (product) throw new Conflict("Product already exists");

        return false;
    }
}
