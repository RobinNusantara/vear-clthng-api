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
        signature: string;
        expiresIn: string;
    }): Promise<string> {
        return new Promise((resolve, reject) => {
            const { payload, signature, expiresIn } = params;

            const options: SignOptions = {
                expiresIn,
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
