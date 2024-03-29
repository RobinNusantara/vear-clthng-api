/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// Import Dependencies
import { BaseHttpController } from "inversify-express-utils";
import { JsonResult } from "inversify-express-utils/lib/results";
import { Unauthorized } from "http-errors";

// Import Applications
import { HttpMethod } from "@apps/common/enums/HttpMethodEnum";
import { HttpStatus } from "@apps/common/enums/HttpStatusEnum";
import { ResponseFactory } from "@apps/common/factories/ResponseFactory";
import { IPaginateDataFormat } from "@apps/common/interfaces/PaginateDataFormatInterface";
import { IPageFormat } from "@apps/common/interfaces/PageFormatInterface";

export class Controller extends BaseHttpController {
    private formatLink(page: number, limit: number): string {
        const { protocol, hostname, path } = this.httpContext.request;

        return `${protocol}://${hostname}/api${path}?page=${page}&limit=${limit}`;
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

    protected paginate(
        count: number,
        rows: Array<Record<string, any>>,
    ): IPaginateDataFormat {
        const page = this.httpContext.request.query["page"] as string;
        const limit = this.httpContext.request.query["limit"] as string;

        const paginationInfo = this.formatPage(
            parseInt(page) || 1,
            parseInt(limit) || 10,
            count,
        );

        const results: IPaginateDataFormat = {
            pagination: paginationInfo,
            rows,
        };

        return results;
    }

    protected identifier(): string {
        const user = this.httpContext.request.user;

        if (!user) throw new Unauthorized();

        return user.id;
    }

    protected response(data: Record<string, any>): JsonResult {
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
