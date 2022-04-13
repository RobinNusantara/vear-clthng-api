import { Sequelize } from "sequelize-typescript";
import { config } from "@apps/common/config/AppConfig";
import { models } from "@apps/models";

const { database } = config;

export const Database = new Sequelize({
    dialect: "mysql",
    ...database,
    logging: false,
    models,
});
