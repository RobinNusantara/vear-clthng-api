import { Router } from "express";
import { express, SwaggerDefinitionConstant } from "swagger-express-ts";

export class ApiDocs {
    public static config(): Router {
        return express({
            definition: {
                info: {
                    title: "Vear Clothing API",
                    version: "1.0",
                },
                host: String(process.env.HOST),
                basePath: `:${Number(process.env.PORT)}/api`,
                securityDefinitions: {
                    apiKeyHeader: {
                        type: SwaggerDefinitionConstant.Security.Type.API_KEY,
                        in: SwaggerDefinitionConstant.Security.In.HEADER,
                        name: "apiHeader",
                    },
                },
            },
        });
    }
}
