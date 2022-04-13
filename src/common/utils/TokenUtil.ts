// Import Dependencies
import { InternalServerError } from "http-errors";
import { sign, SignOptions, verify } from "jsonwebtoken";
import { Unauthorized } from "http-errors";

// Import Applications
import { config } from "@apps/common/config/AppConfig";
import { IJwtPayload } from "@apps/common/interfaces/JwtPayloadInterface";

export class TokenUtil {
    public static async generateToken(params: {
        payload: IJwtPayload;
        expiresIn: string;
    }): Promise<string> {
        return new Promise((resolve, reject) => {
            const { payload, expiresIn } = params;
            const { server, token } = config;

            const options: SignOptions = {
                expiresIn,
                audience: payload.id,
                issuer: server.host,
            };

            sign(payload, token.signature.access, options, (err, token) => {
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
