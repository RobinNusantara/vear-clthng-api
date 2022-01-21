/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { HttpStatus } from "@apps/common/enums/HttpStatusEnum";
import { ResponseModel } from "@apps/common/models/ResponseModel";

export class ResponseFactory {
    public static successResponse(
        status: HttpStatus,
        data: any,
    ): ResponseModel {
        return {
            success: true,
            error: null,
            results: {
                status,
                data,
            },
        };
    }

    public static errorResponse(
        status: HttpStatus,
        messages: any,
    ): ResponseModel {
        return {
            success: false,
            error: {
                status,
                messages,
            },
            results: null,
        };
    }
}
