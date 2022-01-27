// Import Dependencies
import { Container } from "inversify";

// Import Applications
import { config } from "@apps/common/config/AppConfig";
import { App } from "App";

(function main() {
    const { server } = config;

    const container = new Container();
    const app = new App(container, server.port);

    app.start();
})();
