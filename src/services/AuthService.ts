import { REPOSITORY_TYPES } from "@apps/repositories/modules";
import { UserRepository } from "@apps/repositories/UserRepository";
import { inject, injectable } from "inversify";

@injectable()
export class AuthService {
    constructor(
        @inject(REPOSITORY_TYPES.UserRepository)
        private readonly _userRepository: UserRepository,
    ) {}

    async signUp(): Promise<string> {
        return "Sign Up";
    }

    async signIn(): Promise<string> {
        return "Sign In";
    }
}
