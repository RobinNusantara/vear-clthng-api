import { Role } from "@apps/common/enums/RoleEnum";
import { Status } from "@apps/common/enums/StatusEnum";

export interface IJwtPayload {
    id: string;
    username: string;
    email: string;
    role: Role;
    status: Status;
    iat?: number;
    exp?: number;
}
