/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// Import Dependencies
import { Role } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import { Forbidden, Unauthorized } from "http-errors";
import { interfaces } from "inversify-express-utils";
import { verify } from "jsonwebtoken";

// Import Applications
import { config } from "@apps/common/config/AppConfig";
import { IJwtPayload } from "@apps/common/interfaces/JwtPayloadInterface";

export const access = {
    "*": [Role.User, Role.Admin],
};

export class Authentication {
    public static verify(params: { roles: Array<Role> }) {
        return (req: Request, res: Response, next: NextFunction) => {
            const signature = config.token.signature;
            const authorization = req.headers["authorization"];
            const token = authorization && authorization.split(" ")[1];

            if (!token) throw new Unauthorized();

            verify(token, signature.access, (err: any, user: any) => {
                if (err) throw new Forbidden();

                const payload = user as IJwtPayload;

                const httpContext: interfaces.HttpContext = Reflect.getMetadata(
                    "inversify-express-utils:httpcontext",
                    req,
                );

                if (!params.roles.includes(payload.role)) {
                    throw new Forbidden("You don't have permission for this");
                }

                httpContext.user.details = user;
                req.user = user;
                next();
            });
        };
    }
}
