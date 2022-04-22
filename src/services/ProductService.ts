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

    async getProducts(): Promise<Array<ProductDto>> {
        const products = await this._productRepository.indexes();

        return products.map((product) => ProductDto.fromProductModel(product));
    }
}
