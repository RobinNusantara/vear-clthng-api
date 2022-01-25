import { Role } from "@prisma/client";

export interface IJwtPayload {
    id: string;
    username: string;
    email: string;
    role: Role;
}
