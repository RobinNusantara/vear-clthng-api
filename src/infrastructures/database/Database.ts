import { Sequelize } from "sequelize-typescript";
import { config } from "@apps/common/config/AppConfig";
import { models } from "@apps/models";

class PrimeDatabase extends Sequelize {
    private static _instance: PrimeDatabase;

    constructor() {
        super({
            dialect: "mysql",
            host: config.database.host,
            port: config.database.port,
            database: "db_vear_clthng",
            username: config.database.username,
            password: config.database.password,
            logging: false,
            models,
        });
    }

    public static getInstance(): PrimeDatabase {
        if (!this._instance) {
            this._instance = new PrimeDatabase();
        }

        return this._instance;
    }
}

export const Database = PrimeDatabase.getInstance();
