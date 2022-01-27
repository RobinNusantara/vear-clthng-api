// Import Dependencies
import { User } from "@prisma/client";
import { InternalServerError } from "http-errors";
import { sign, SignOptions, verify } from "jsonwebtoken";
import { Unauthorized } from "http-errors";

// Import Applications
import { config } from "@apps/common/config/AppConfig";
import { IJwtPayload } from "@apps/common/interfaces/JwtPayloadInterface";

export class TokenUtil {
    private static tokenPayload(model: User): IJwtPayload {
        return {
            id: model.id,
            username: model.username,
            email: model.email,
            role: model.role,
        };
    }

    private static tokenOptions(userId: string, expires: string): SignOptions {
        const { server } = config;

        return {
            expiresIn: expires,
            audience: userId,
            issuer: server.host,
        };
    }

    public static async generateAccessToken(model: User): Promise<string> {
        return new Promise((resolve, reject) => {
            const { token: jwt } = config;

            const payload = this.tokenPayload(model);

            const options = this.tokenOptions(model.id, "15s");

            sign(payload, jwt.signature.access, options, (err, token) => {
                if (err) {
                    reject(new InternalServerError());
                }

                resolve(String(token));
            });
        });
    }

    public static async generateRefreshToken(model: User): Promise<string> {
        return new Promise((resolve, reject) => {
            const { token: jwt } = config;

            const payload = this.tokenPayload(model);

            const options = this.tokenOptions(model.id, "24h");

            sign(payload, jwt.signature.refresh, options, (err, token) => {
                if (err) {
                    reject(new InternalServerError());
                }

                resolve(String(token));
            });
        });
    }

    public static async verifyRefreshToken(token: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const { token: jwt } = config;

            verify(token, jwt.signature.refresh, (err: any, payload: any) => {
                if (err) reject(new Unauthorized());

                resolve(payload);
            });
        });
    }
}
