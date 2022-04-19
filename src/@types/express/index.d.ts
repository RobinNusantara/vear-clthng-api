import { IJwtPayload } from "@apps/common/interfaces/JwtPayloadInterface";
import express from "express";

declare global {
    namespace Express {
        interface Request {
            user?: IJwtPayload
        }
    }
}