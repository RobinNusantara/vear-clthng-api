import { Controller } from "@apps/common/base/Controller";
import { SERVICE_TYPES } from "@apps/services/modules";
import { ProductService } from "@apps/services/ProductService";
import { inject } from "inversify";
import { controller, httpGet, queryParam } from "inversify-express-utils";
import { JsonResult } from "inversify-express-utils/lib/results";

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
        const { count, rows } = await this._productService.getProducts({
            page: parseInt(page),
            limit: parseInt(limit),
        });

        const results = this.paginate(count, rows);

        return this.response(results);
    }
}
