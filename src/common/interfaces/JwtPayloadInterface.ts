import { Role } from "../enums/RoleEnum";

export interface IJwtPayload {
    id: string | undefined;
    username: string;
    email: string;
    role: Role;
    status: number;
}
