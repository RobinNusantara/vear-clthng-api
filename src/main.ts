// Import Dependencies
import { Container } from "inversify";

// Import Applications
import { appConfig } from "@apps/common/config/AppConfig";
import { App } from "App";

(function main() {
    const { server } = appConfig;

    const container = new Container();
    const app = new App(container, server.port);

    app.start();
})();
