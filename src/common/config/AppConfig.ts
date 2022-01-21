import { config } from "dotenv";

config();

export const appConfig = {
    server: {
        host: String(process.env.HOST) || "localhost",
        port: Number(process.env.PORT) || 5000,
    },
    token: {
        signature: String(process.env.JWT_SIGNATURE) || "JWT_SIGNATURE",
    },
};
