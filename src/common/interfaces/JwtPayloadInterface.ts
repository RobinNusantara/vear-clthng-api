import { Role } from "@apps/common/enums/RoleEnum";

export interface IJwtPayload {
    id: string;
    username: string;
    email: string;
    role: Role;
    status: number;
}
