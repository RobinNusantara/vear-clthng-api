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
                schemes: ["http", "https"],
                basePath: "/api",
                consumes: ["application/json", "application/xml"],
                produces: ["application/json", "application/xml"],
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
