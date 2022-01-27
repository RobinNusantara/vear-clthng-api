import { IToken } from "@apps/common/interfaces/TokenInterface";
import { PasswordUtil } from "@apps/common/utils/PasswordUtil";
import { TokenUtil } from "@apps/common/utils/TokenUtil";
import { SignUpDto, SignInDto } from "@apps/dtos/AuthDto";
import { REPOSITORY_TYPES } from "@apps/repositories/modules";
import { UserRepository } from "@apps/repositories/UserRepository";
import { User } from "@prisma/client";
import { Unauthorized } from "http-errors";
import { inject, injectable } from "inversify";

@injectable()
export class AuthService {
    constructor(
        @inject(REPOSITORY_TYPES.UserRepository)
        private readonly _userRepository: UserRepository,
    ) {}

    private async getToken(user: User): Promise<IToken> {
        const [accessToken, refreshToken] = await Promise.all([
            await TokenUtil.generateAccessToken(user),
            await TokenUtil.generateRefreshToken(user),
        ]);

        return {
            accessToken,
            refreshToken,
        };
    }

    async signUp(body: SignUpDto): Promise<IToken> {
        const user = await this._userRepository.insert({ body });

        const token = await this.getToken(user);

        return token;
    }

    async signIn(body: SignInDto): Promise<any> {
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

        const token = await this.getToken(user);

        return token;
    }
}
