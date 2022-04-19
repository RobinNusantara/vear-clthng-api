// Import Dependencies
import { Container } from "inversify";

// Import Applications
import { config } from "@apps/common/config/AppConfig";
import { App } from "App";
import { PrimeDatabase } from "@apps/infrastructures/database/PrimeDatabase";

(function main() {
    const { server } = config;

    const container = new Container();
    const app = new App(container, server.port);

    PrimeDatabase.authenticate()
        .then(() => app.start())
        .catch((error) => console.log(`Connection Error : ${error}`));
})();
