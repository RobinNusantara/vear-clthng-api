/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// Import Dependencies
import { BaseHttpController } from "inversify-express-utils";
import { JsonResult } from "inversify-express-utils/lib/results";

// Import Applications
import { HttpMethod } from "@apps/common/enums/HttpMethodEnum";
import { HttpStatus } from "@apps/common/enums/HttpStatusEnum";
import { ResponseFactory } from "@apps/common/factories/ResponseFactory";
import { IDataPaginateFormat } from "@apps/common/interfaces/DataPaginateFormatInterface";
import { IPageFormat } from "@apps/common/interfaces/PageFormatInterface";

export class Controller extends BaseHttpController {
    private formatLink(page: number, limit: number): string {
        const protocol = this.httpContext.request.protocol;
        const host = this.httpContext.request.hostname;
        const uri = this.httpContext.request.path;

        return `${protocol}://${host}${uri}?page=${page}&limit=${limit}`;
    }

    protected formatPage(
        page: number,
        limit: number,
        totalItems: number,
    ): IPageFormat {
        const totalPages = Math.ceil(totalItems / limit);

        const prevPage = page === 1 ? page : page - 1;
        const nextPage = page >= totalPages ? page : page + 1;

        return {
            page,
            limit,
            totalItems,
            totalPages,
            prevPage: this.formatLink(prevPage, limit),
            nextPage: this.formatLink(nextPage, limit),
        };
    }

    protected paginate(count: number, rows: any): IDataPaginateFormat {
        const page = this.httpContext.request.query["page"] as string;
        const limit = this.httpContext.request.query["limit"] as string;

        const paginationInfo = this.formatPage(
            parseInt(page),
            parseInt(limit),
            count,
        );

        const results: IDataPaginateFormat = {
            pagination: paginationInfo,
            rows,
        };

        return results;
    }

    protected response(data: any): JsonResult {
        const method = this.httpContext.request.method;

        let status: HttpStatus;

        if (method === HttpMethod.Post) {
            status = HttpStatus.Created;
        } else {
            status = HttpStatus.Ok;
        }

        const response = ResponseFactory.successResponse(status, data);

        return this.json(response, status);
    }
}
