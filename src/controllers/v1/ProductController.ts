import { Controller } from "@apps/common/base/Controller";
import { CreateProductDto } from "@apps/dtos/ProductDto";
import { ValidateData } from "@apps/middlewares/ValidateDataMiddleware";
import { SERVICE_TYPES } from "@apps/services/modules";
import { ProductService } from "@apps/services/ProductService";
import { inject } from "inversify";
import {
    controller,
    httpGet,
    httpPost,
    queryParam,
    requestBody,
} from "inversify-express-utils";
import { JsonResult } from "inversify-express-utils/lib/results";

@controller("/v1/products")
export class ProductController extends Controller {
    constructor(
        @inject(SERVICE_TYPES.ProductService)
        private readonly _productService: ProductService,
    ) {
        super();
    }

    @httpPost("/", ValidateData.requestBody(CreateProductDto))
    async insertProduct(
        @requestBody() body: CreateProductDto,
    ): Promise<JsonResult> {
        const data = await this._productService.insertProduct(body);

        return this.response(data);
    }

    @httpGet("/")
    async getProducts(
        @queryParam("page") page: string,
        @queryParam("limit") limit: string,
    ): Promise<JsonResult> {
        const { count, rows } = await this._productService.getProducts({
            page: parseInt(page),
            limit: parseInt(limit),
        });

        const results = this.paginate(count, rows);

        return this.response(results);
    }
}
