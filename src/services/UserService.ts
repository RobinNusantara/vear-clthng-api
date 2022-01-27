import { REPOSITORY_TYPES } from "@apps/repositories/modules";
import { UserRepository } from "@apps/repositories/UserRepository";
import { User } from "@prisma/client";
import { inject, injectable } from "inversify";

@injectable()
export class UserService {
    constructor(
        @inject(REPOSITORY_TYPES.UserRepository)
        private readonly _userRepository: UserRepository,
    ) {}

    async getUsers(): Promise<Array<User>> {
        return await this._userRepository.indexes();
    }
}
