import { PasswordUtil } from "@apps/common/utils/PasswordUtil";
import { SignInDto, SignUpDto } from "@apps/dtos/AuthDto";
import { REPOSITORY_TYPES } from "@apps/repositories/modules";
import { UserRepository } from "@apps/repositories/UserRepository";
import { User } from "@prisma/client";
import { Unauthorized } from "http-errors";
import { inject, injectable } from "inversify";

@injectable()
export class UserService {
    constructor(
        @inject(REPOSITORY_TYPES.UserRepository)
        private readonly _userRepository: UserRepository,
    ) {}

    async signUp(body: SignUpDto): Promise<User> {
        const user = await this._userRepository.insert({ body });

        return user;
    }

    async signIn(body: SignInDto): Promise<User> {
        const user = await this._userRepository.index({
            props: {
                key: "email",
                value: body.email,
            },
        });

        if (!user) {
            throw new Unauthorized("Username or password is incorrect");
        }

        await PasswordUtil.validatePassword({
            requestPassword: body.password,
            storePassword: user.password,
        });

        return user;
    }

    async getUsers(): Promise<Array<User>> {
        return await this._userRepository.indexes();
    }
}
