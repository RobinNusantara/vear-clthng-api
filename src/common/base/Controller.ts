/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// Import Dependencies
import { BaseHttpController } from "inversify-express-utils";
import { JsonResult } from "inversify-express-utils/lib/results";

// Import Applications
import { HttpMethod } from "@apps/common/enums/HttpMethodEnum";
import { HttpStatus } from "@apps/common/enums/HttpStatusEnum";
import { ResponseFactory } from "@apps/common/factories/ResponseFactory";

export class Controller extends BaseHttpController {
    protected response(data: any): JsonResult {
        const method = this.httpContext.request.method;

        let status: HttpStatus;

        switch (method) {
            case HttpMethod.Post:
                status = HttpStatus.Created;
                break;
            case HttpMethod.Get:
            case HttpMethod.Patch:
            case HttpMethod.Put:
                status = HttpStatus.Ok;
                break;
            default:
                status = HttpStatus.NoContent;
                break;
        }

        const response = ResponseFactory.successResponse(status, data);

        return this.json(response, status);
    }
}
