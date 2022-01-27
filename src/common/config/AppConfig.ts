import { config as dotenv } from "dotenv";

dotenv();

export const config = {
    server: {
        host: String(process.env.HOST) || "localhost",
        port: Number(process.env.PORT) || 5000,
    },
    token: {
        signature: {
            access: String(process.env.JWT_ACCESS_SIGNATURE),
            refresh: String(process.env.JWT_REFRESH_SIGNATURE),
        },
    },
};
