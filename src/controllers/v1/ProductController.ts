import { Controller } from "@apps/common/base/Controller";
import { HttpStatus } from "@apps/common/enums/HttpStatusEnum";
import { CreateProductDto } from "@apps/dtos/ProductDto";
import { Authentication } from "@apps/middlewares/AuthenticationMiddleware";
import { ValidateData } from "@apps/middlewares/ValidateDataMiddleware";
import { SERVICE_TYPES } from "@apps/services/modules";
import { ProductService } from "@apps/services/ProductService";
import { inject } from "inversify";
import {
    controller,
    httpDelete,
    httpGet,
    httpPost,
    queryParam,
    requestBody,
    requestParam,
} from "inversify-express-utils";
import {
    JsonResult,
    StatusCodeResult,
} from "inversify-express-utils/lib/results";

@controller("/v1/products")
export class ProductController extends Controller {
    constructor(
        @inject(SERVICE_TYPES.ProductService)
        private readonly _productService: ProductService,
    ) {
        super();
    }

    @httpGet("/")
    async getProducts(
        @queryParam("page") page: string,
        @queryParam("limit") limit: string,
    ): Promise<JsonResult> {
        const data = await this._productService.getProducts({
            page,
            limit,
        });

        return this.response(this.paginate(data.count, data.rows));
    }

    @httpGet("/:productId")
    async getProduct(
        @requestParam("productId") productId: string,
    ): Promise<JsonResult> {
        const id = parseInt(productId);
        const data = await this._productService.getProduct(id);

        return this.response(data);
    }

    /**
     * These routes only access by admin
     */

    @httpPost(
        "/",
        Authentication.verify({ roles: ["Admin"] }),
        ValidateData.requestBody(CreateProductDto),
    )
    async insertProduct(
        @requestBody() body: CreateProductDto,
    ): Promise<JsonResult> {
        const data = await this._productService.insertProduct(body);

        return this.response(data);
    }

    @httpDelete("/:productId", Authentication.verify({ roles: ["Admin"] }))
    async removeProduct(
        @requestParam("productId") productId: string,
    ): Promise<StatusCodeResult> {
        const id = parseInt(productId);
        await this._productService.removeProduct(id);

        return this.statusCode(HttpStatus.NoContent);
    }
}
