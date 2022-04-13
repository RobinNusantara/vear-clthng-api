import { Sequelize } from "sequelize-typescript";
import { config } from "@apps/common/config/AppConfig";
import { models } from "@apps/models";

const { database } = config;

const environment = process.env.NODE_ENV;
const mode = environment === "production" ? "production" : "development";

export const Database = new Sequelize({
    dialect: "mysql",
    ...database[mode],
    logging: false,
    models,
});
