import { Controller } from "@apps/common/base/Controller";
import { SERVICE_TYPES } from "@apps/services/modules";
import { ProductService } from "@apps/services/ProductService";
import { inject } from "inversify";
import { controller, httpGet, requestParam } from "inversify-express-utils";
import { JsonResult } from "inversify-express-utils/lib/results";

@controller("/v1/products")
export class ProductController extends Controller {
    constructor(
        @inject(SERVICE_TYPES.ProductService)
        private readonly _productService: ProductService,
    ) {
        super();
    }

    @httpGet("/:productId")
    async getProduct(
        @requestParam("productId") productId: string,
    ): Promise<JsonResult> {
        const id = parseInt(productId);
        const data = await this._productService.getProduct(id);

        return this.response(data);
    }
}
