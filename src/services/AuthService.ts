import { TokenUtil } from "@apps/common/utils/TokenUtil";
import { SignUpDto } from "@apps/dtos/AuthDto";
import { REPOSITORY_TYPES } from "@apps/repositories/modules";
import { UserRepository } from "@apps/repositories/UserRepository";
import { Conflict } from "http-errors";
import { inject, injectable } from "inversify";

@injectable()
export class AuthService {
    constructor(
        @inject(REPOSITORY_TYPES.UserRepository)
        private readonly _userRepository: UserRepository,
    ) {}

    async signUp(body: SignUpDto): Promise<string> {
        await Promise.all([
            this.isEmailExists(body.email),
            this.isUsernameExists(body.username),
        ]);

        const user = await this._userRepository.insert({ body });

        const token = await TokenUtil.generateToken({
            payload: {
                id: user.getDataValue("id"),
                email: user.getDataValue("email"),
                username: user.getDataValue("username"),
                role: user.getDataValue("role"),
                status: user.getDataValue("status"),
            },
            expiresIn: "1d",
        });

        return token;
    }

    async signIn(): Promise<string> {
        return "Sign In";
    }

    /** Validation */
    private async isUsernameExists(username: string): Promise<boolean> {
        const user = await this._userRepository.index({
            props: {
                key: "username",
                value: username,
            },
        });

        if (user) throw new Conflict("Username already exists!");

        return false;
    }

    private async isEmailExists(email: string): Promise<boolean> {
        const user = await this._userRepository.index({
            props: {
                key: "email",
                value: email,
            },
        });

        if (user) throw new Conflict("Email already exists!");

        return false;
    }
}
