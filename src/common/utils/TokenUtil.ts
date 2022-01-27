// Import Dependencies
import { User } from "@prisma/client";
import { InternalServerError } from "http-errors";
import { sign, SignOptions, verify } from "jsonwebtoken";
import { Unauthorized } from "http-errors";

// Import Applications
import { config } from "@apps/common/config/AppConfig";
import { IJwtPayload } from "@apps/common/interfaces/JwtPayloadInterface";

export class TokenUtil {
    public static async generateToken(params: {
        model: User;
        signature: string;
        expiresIn: string;
    }): Promise<string> {
        return new Promise((resolve, reject) => {
            const { model, signature, expiresIn } = params;
            const { server } = config;

            const payload: IJwtPayload = {
                id: model.id,
                username: model.username,
                email: model.email,
                role: model.role,
            };

            const options: SignOptions = {
                expiresIn,
                audience: model.id,
                issuer: server.host,
            };

            sign(payload, signature, options, (err, token) => {
                if (err) reject(new InternalServerError());

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
