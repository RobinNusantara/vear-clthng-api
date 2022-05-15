/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
// Import Dependencies
import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";
import { MulterError } from "multer";

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
        } else if (err instanceof MulterError) {
            const multer = CreateError.mapMulterError(err);

            statusCode = multer.status;
            messages = multer.messages;
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

    private static mapMulterError(error: MulterError) {
        let status: HttpStatus;
        let messages: string;

        switch (error.code) {
            case "LIMIT_FILE_SIZE":
                status = HttpStatus.PayloadTooLarge;
                messages = "File too large!";
                break;
            case "LIMIT_UNEXPECTED_FILE":
                status = HttpStatus.RangeNotSatisfiable;
                messages = "File limit exceeded!";
                break;
            default:
                console.log("======Upload File Error======");
                console.log(error);
                console.log("<<=========================>>");

                status = HttpStatus.BadRequest;
                messages = "Bad request";
                break;
        }

        return {
            status,
            messages,
        };
    }
}
