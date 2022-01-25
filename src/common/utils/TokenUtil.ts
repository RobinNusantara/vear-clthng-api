// Import Dependencies
import { User as UserModel } from "@prisma/client";
import { sign } from "jsonwebtoken";

// Import Applications
import { appConfig } from "@apps/common/config/AppConfig";
import { IJwtPayload } from "@apps/common/interfaces/JwtPayloadInterface";

export class TokenUtil {
    public static generateToken(model: UserModel): string {
        const payload: IJwtPayload = {
            id: model.id,
            username: model.username,
            email: model.email,
            role: model.role,
        };

        const { token } = appConfig;

        return sign(payload, token.signature, {
            expiresIn: "24h",
        });
    }
}
