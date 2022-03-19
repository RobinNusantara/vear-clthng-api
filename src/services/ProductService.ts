import {
    CreateProductMaterialDto,
    CreateProductVariantDto,
    ProductDto,
} from "@apps/dtos/ProductDto";
import { REPOSITORY_TYPES } from "@apps/repositories/modules";
import { ProductRepository } from "@apps/repositories/ProductRepository";
import { CreateProductDto } from "@apps/dtos/ProductDto";
import { Conflict, NotFound } from "http-errors";
import { inject, injectable } from "inversify";
import { IPaginate } from "@apps/common/interfaces/PaginateInterface";
import { ArrayUtil } from "@apps/common/utils/ArrayUtil";

@injectable()
export class ProductService {
    constructor(
        @inject(REPOSITORY_TYPES.ProductRepository)
        private readonly _productRepository: ProductRepository,
    ) {}

    async insertProduct(body: CreateProductDto): Promise<ProductDto> {
        // Validate Product
        await this.isProductExists(body.name);

        // Validate Colors
        if (body.variants.length !== 0) {
            this.isProductColorsDuplicate(body.variants);
        }

        // Validate Materials
        if (body.materials.length !== 0) {
            this.isProductMaterialsDuplicate(body.materials);
        }

        const { id } = await this._productRepository.insert({
            body,
        });

        const product = await this.getProduct(id);

        return product;
    }

    async getProducts(params: {
        page: string;
        limit: string;
    }): Promise<IPaginate<ProductDto>> {
        const page = parseInt(params.page) || 1;
        const limit = parseInt(params.limit) || 10;

        const { count, rows } = await this._productRepository.indexes({
            page,
            limit,
        });

        return {
            count,
            rows: ProductDto.iterateProductModel(rows),
        };
    }

    async getProduct(productId: number): Promise<ProductDto> {
        return await this.getProductById(productId);
    }

    async removeProduct(productId: number): Promise<boolean> {
        const { id } = await this.getProductById(productId);

        await this._productRepository.delete({ productId: id });

        return true;
    }

    // Data Validation

    /**
     * @param productId
     */
    private async getProductById(productId: number): Promise<ProductDto> {
        const product = await this._productRepository.index({
            props: {
                key: "id",
                value: productId,
            },
        });

        if (!product) throw new NotFound("Product not found!");

        return ProductDto.fromProductModel(product);
    }

    /**
     * @param productName
     */
    private async isProductExists(productName: string): Promise<boolean> {
        const product = await this._productRepository.index({
            props: {
                key: "productName",
                value: productName,
            },
        });

        if (product) throw new Conflict("Product already exists!");

        return false;
    }

    /**
     * @param variants
     */
    private isProductColorsDuplicate(
        variants: Array<CreateProductVariantDto>,
    ): boolean {
        const colorIds = variants.map((variant) => variant.colorId);

        const results = ArrayUtil.isArrayOfObjectHasDuplicateValue({
            arrayLength: variants.length,
            mappedData: colorIds,
            errorMessage: "Product can't have same color!",
        });

        return results;
    }

    /**
     * @param materials
     */
    private isProductMaterialsDuplicate(
        materials: Array<CreateProductMaterialDto>,
    ): boolean {
        const materialIds = materials.map((variant) => variant.materialId);

        const results = ArrayUtil.isArrayOfObjectHasDuplicateValue({
            arrayLength: materials.length,
            mappedData: materialIds,
            errorMessage: "Product can't have same material!",
        });

        return results;
    }
}
