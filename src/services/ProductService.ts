import { IDataPagination } from "@apps/common/interfaces/DataPaginationInterface";
import { ProductDto } from "@apps/dtos/ProductDto";
import { REPOSITORY_TYPES } from "@apps/repositories/modules";
import { ProductRepository } from "@apps/repositories/ProductRepository";
import { inject, injectable } from "inversify";

@injectable()
export class ProductService {
    constructor(
        @inject(REPOSITORY_TYPES.ProductRepository)
        private readonly _productRepository: ProductRepository,
    ) {}

    async getProducts(queries: {
        page: number;
        limit: number;
    }): Promise<IDataPagination<ProductDto>> {
        const page = queries.page || 1;
        const limit = queries.limit || 10;

        const offset = (page - 1) * limit;

        const { count, rows } = await this._productRepository.indexes({
            offset,
            limit,
        });

        const products = rows.map((row) => ProductDto.fromProductModel(row));

        return {
            count,
            rows: products,
        };
    }
}
