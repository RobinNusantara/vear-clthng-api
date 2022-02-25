import { REPOSITORY_TYPES } from "@apps/repositories/modules";
import { UserRepository } from "@apps/repositories/UserRepository";
import { User, Role as UserRole } from "@prisma/client";
import { inject, injectable } from "inversify";

@injectable()
export class UserService {
    constructor(
        @inject(REPOSITORY_TYPES.UserRepository)
        private readonly _userRepository: UserRepository,
    ) {}

    async getUsers(params: {
        page: string;
        limit: string;
        username: string;
        role: string;
    }): Promise<{ count: number; rows: Array<User> }> {
        const page = parseInt(params.page) || 1;
        const limit = parseInt(params.limit) || 10;

        const users = await this._userRepository.indexes({
            page,
            limit,
            username: params.username,
            role: this.getUserRole(params.role),
        });

        const results = {
            count: users.count,
            rows: users.rows,
        };

        return results;
    }

    private getUserRole(role: string): UserRole {
        let userRole;

        switch (role) {
            case "admin":
                userRole = UserRole.Admin;
                break;
            case "user":
                userRole = UserRole.User;
                break;
            default:
                userRole = {};
        }

        const results = userRole as UserRole;

        return results;
    }
}
