import { ProductDto } from "@apps/dtos/ProductDto";
import { REPOSITORY_TYPES } from "@apps/repositories/modules";
import { ProductRepository } from "@apps/repositories/ProductRepository";
import { NotFound } from "http-errors";
import { inject, injectable } from "inversify";

@injectable()
export class ProductService {
    constructor(
        @inject(REPOSITORY_TYPES.ProductRepository)
        private readonly _productRepository: ProductRepository,
    ) {}

    async getProduct(productId: number): Promise<ProductDto> {
        const product = await this._productRepository.index({ productId });

        if (!product) throw new NotFound("Product not found!");

        return ProductDto.fromProductModel(product);
    }
}
