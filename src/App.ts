/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */

// Dependencies
import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import { Application, json, urlencoded } from "express";
import { Server } from "http";
import { Container, ContainerModule } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import morgan from "morgan";

// Routes
import "@apps/controllers/v1/routes";

// Modules
import { repositories } from "@apps/repositories/modules";
import { services } from "@apps/services/modules";
import { validations } from "@apps/validations/modules";

// Middlewares
import { CreateError } from "@apps/common/middlewares/CreateErrorMiddleware";

export class App {
    private readonly _container: Container;
    private readonly _host: string = process.env.HOST || "localhost";
    private readonly _port: number;

    constructor(container: Container, port: number) {
        this._container = container;
        this._port = port;
        this.modules();
    }

    public start(): Server {
        const server = new InversifyExpressServer(this._container, null, {
            rootPath: "/api",
        });

        return server
            .setConfig((app) => this.middlewares(app))
            .setErrorConfig((app) => this.errors(app))
            .build()
            .listen(this._port, this._host, () => {
                console.log(`Server running on port ${this._port}`);
            });
    }

    private modules(): void {
        const containers = new ContainerModule((bind) => {
            const prisma = new PrismaClient();
            bind<PrismaClient>("PrismaClient").toConstantValue(prisma);

            repositories(bind);
            validations(bind);
            services(bind);
        });

        return this._container.load(containers);
    }

    private middlewares(app: Application): void {
        app.use(json());
        app.use(urlencoded({ extended: false }));
        app.use(morgan("dev"));
        app.use(cors());
    }

    private errors(app: Application): void {
        app.use(CreateError.defineErrors);
    }
}
