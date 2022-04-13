// Import Dependencies
import { Container } from "inversify";

// Import Applications
import { config } from "@apps/common/config/AppConfig";
import { App } from "App";
import { Database } from "@apps/infrastructures/database/Database";

(function main() {
    const { server } = config;

    const container = new Container();
    const app = new App(container, server.port);

    Database.authenticate()
        .then(() => {
            console.log("Connected to Database");
            app.start();
        })
        .catch((error) => console.log(`Connection Error : ${error}`));
})();
