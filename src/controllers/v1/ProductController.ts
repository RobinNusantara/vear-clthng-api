import { Controller } from "@apps/common/base/Controller";
import { SERVICE_TYPES } from "@apps/services/modules";
import { ProductService } from "@apps/services/ProductService";
import { inject } from "inversify";
import { controller, httpGet } from "inversify-express-utils";
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
    async getProducts(): Promise<JsonResult> {
        const data = await this._productService.getProducts();

        return this.response(data);
    }
}
