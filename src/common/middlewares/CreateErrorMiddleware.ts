/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
// Import Dependencies
import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { HttpError } from "http-errors";

// Import Applications
import { HttpStatus } from "@apps/common/enums/HttpStatusEnum";
import { PrismaError } from "@apps/common/enums/PrismaErrorEnum";
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
        } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
            const { status, message } = CreateError.mapPrismaError(err);

            statusCode = status;
            messages = message;
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

    private static mapPrismaError(err: Prisma.PrismaClientKnownRequestError) {
        const errorCode = err.code as PrismaError;

        const meta = JSON.stringify(err.meta);
        const property = JSON.parse(meta);

        const handledError = {
            [PrismaError.UniqueConstraint]: {
                status: HttpStatus.Conflict,
                message: `${property.target} already taken!`,
            },
        };

        const unhandledError = {
            status: HttpStatus.InternalServerError,
            message: "Internal Server Error",
        };

        console.log({ code: errorCode, message: err.message });

        return handledError[errorCode] || unhandledError;
    }
}
