import { config as dotenv } from "dotenv";

dotenv();

export const config = Object.freeze({
    server: {
        host: String(process.env.HOST) || "localhost",
        port: Number(process.env.PORT) || 5000,
    },
    database: {
        database: "db_vear_clthng",
        username: String(process.env.DB_USERNAME),
        password: String(process.env.DB_PASSWORD),
        host: String(process.env.DB_HOST),
        port: Number(process.env.DB_PORT) || 3306,
    },
    storage: {
        cloudName: String(process.env.CLOUDINARY_CLOUD_NAME),
        apiKey: String(process.env.CLOUDINARY_API_KEY),
        apiSecret: String(process.env.CLOUDINARY_API_SECRET),
    },
    token: {
        signature: {
            access: String(process.env.JWT_ACCESS_SIGNATURE),
            refresh: String(process.env.JWT_REFRESH_SIGNATURE),
        },
    },
});
