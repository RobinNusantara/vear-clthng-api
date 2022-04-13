/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
// Import Dependencies
import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";

// Import Applications
import { HttpStatus } from "@apps/common/enums/HttpStatusEnum";
import { ResponseFactory } from "@apps/common/factories/ResponseFactory";

export class CreateError {
    public static defineErrors(
        err: any,
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
        let statusCode: HttpStatus;
        let messages: string;

        if (err instanceof HttpError) {
            statusCode = err.statusCode;
            messages = err.message;
        } else {
            console.log("============Error============");
            console.log(err);
            console.log("<<=========================>>");

            statusCode = HttpStatus.InternalServerError;
            messages = "Internal Server Error";
        }

        const response = ResponseFactory.errorResponse(statusCode, messages);

        return res.status(statusCode).json(response);
    }
}
