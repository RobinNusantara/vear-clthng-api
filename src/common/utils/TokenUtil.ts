// Import Dependencies
import { InternalServerError } from "http-errors";
import { sign, SignOptions, verify } from "jsonwebtoken";
import { Unauthorized } from "http-errors";

// Import Applications
import { config } from "@apps/common/config/AppConfig";
import { IJwtPayload } from "@apps/common/interfaces/JwtPayloadInterface";

export class TokenUtil {
    public static async generateToken(params: {
        signature: string;
        expiresIn: string;
    }): Promise<string> {
        return new Promise((resolve, reject) => {
            const { signature, expiresIn } = params;
            const { server } = config;

            const payload: IJwtPayload = {
                id: "",
                username: "",
                email: "",
                role: "",
            };

            const options: SignOptions = {
                expiresIn,
                audience: "",
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
