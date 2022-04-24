/* eslint-disable prettier/prettier */
// Import Dependencies
import { RequestHandler, Request, Response, NextFunction } from "express";
import { ClassConstructor, plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";

// Import Applications
import { HttpStatus } from "@apps/common/enums/HttpStatusEnum";
import { ResponseFactory } from "@apps/common/factories/ResponseFactory";

interface IErrorMessage {
    field: string;
    message: string;
}

interface IErrorConstraint {
    [x: string]: string;
}

export class ValidateData {
    private static errorMessages(
        errors: Array<ValidationError>,
    ): Array<IErrorMessage> {
        const response: Array<IErrorMessage> = [];

        for (const error of errors) {
            if (error.children && error.children.length !== 0) {
                return this.errorMessages(error.children);
            } else {
                const constraints = error.constraints as IErrorConstraint;

                response.push({
                    field: error.property,
                    message: Object.values(constraints).pop() as string,
                });
            }
        }

        return response;
    }

    public static requestBody(dto: ClassConstructor<any>): RequestHandler {
        return (req: Request, res: Response, next: NextFunction) => {
            const body = plainToClass(dto, req.body);

            validate(body).then((errors) => {
                if (errors.length > 0) {
                    const messages = this.errorMessages(errors);

                    const statusCode = HttpStatus.UnprocessableEntity;
                    const response = ResponseFactory.errorResponse(statusCode, messages);

                    return res.status(statusCode).json(response);
                } else {
                    req.body = body;
                    next();
                }
            });
        };
    }
}
