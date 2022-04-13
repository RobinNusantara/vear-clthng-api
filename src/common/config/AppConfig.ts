import { config as dotenv } from "dotenv";

dotenv();

export const config = {
    server: {
        host: String(process.env.HOST) || "localhost",
        port: Number(process.env.PORT) || 5000,
    },
    database: {
        production: {
            database: "db_vear_clthng",
            username: String(process.env.DB_USERNAME),
            password: String(process.env.DB_PASSWORD),
            host: String(process.env.DB_HOSTNAME),
            port: Number(process.env.DB_PORT) || 3306,
        },
        development: {
            database: "db_vear_clthng",
            username: String(process.env.DB_USERNAME),
            password: String(process.env.DB_PASSWORD),
            host: String(process.env.DB_HOSTNAME),
            port: Number(process.env.DB_PORT) || 3306,
        },
    },
    token: {
        signature: {
            access: String(process.env.JWT_ACCESS_SIGNATURE),
            refresh: String(process.env.JWT_REFRESH_SIGNATURE),
        },
    },
};
