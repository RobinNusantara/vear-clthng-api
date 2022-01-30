import { Router } from "express";
import { express, SwaggerDefinitionConstant } from "swagger-express-ts";

export class ApiDocs {
    public static config(): Router {
        const host = `${process.env.HOST}:${process.env.PORT}`;

        return express({
            definition: {
                openapi: "2.0",
                info: {
                    title: "Vear Clothing API",
                    description: "Vear Clothing API Documentation",
                    version: "1.0.0",
                },
                host,
                schemes: [
                    SwaggerDefinitionConstant.Scheme.HTTP,
                    SwaggerDefinitionConstant.Scheme.HTTPS,
                ],
                basePath: "/api",
                consumes: [
                    SwaggerDefinitionConstant.Consume.JSON,
                    SwaggerDefinitionConstant.Consume.XML,
                ],
                produces: [
                    SwaggerDefinitionConstant.Produce.JSON,
                    SwaggerDefinitionConstant.Produce.XML,
                ],
                securityDefinitions: {
                    "Bearer-Token": {
                        type: SwaggerDefinitionConstant.Security.Type.API_KEY,
                        in: SwaggerDefinitionConstant.Security.In.HEADER,
                        name: "Authorization",
                    },
                },
            },
        });
    }
}
