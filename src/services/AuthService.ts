import { config } from "@apps/common/config/AppConfig";
import { IToken } from "@apps/common/interfaces/TokenInterface";
import { PasswordUtil } from "@apps/common/utils/PasswordUtil";
import { TokenUtil } from "@apps/common/utils/TokenUtil";
import { SignUpDto, SignInDto, RefreshTokenDto } from "@apps/dtos/AuthDto";
import { REPOSITORY_TYPES } from "@apps/repositories/modules";
import { UserRepository } from "@apps/repositories/UserRepository";
import { User } from "@prisma/client";
import { BadRequest, Unauthorized } from "http-errors";
import { inject, injectable } from "inversify";

@injectable()
export class AuthService {
    constructor(
        @inject(REPOSITORY_TYPES.UserRepository)
        private readonly _userRepository: UserRepository,
    ) {}

    private async getToken(user: User): Promise<IToken> {
        const { token } = config;
        const { signature } = token;

        const [accessToken, refreshToken] = await Promise.all([
            // Acces Token
            TokenUtil.generateToken({
                model: user,
                signature: signature.access,
                expiresIn: "15s",
            }),
            // Refresh Token
            TokenUtil.generateToken({
                model: user,
                signature: signature.refresh,
                expiresIn: "24h",
            }),
        ]);

        return {
            accessToken,
            refreshToken,
        };
    }

    async signUp(body: SignUpDto): Promise<IToken> {
        const user = await this._userRepository.insert({ body });

        return await this.getToken(user);
    }

    async signIn(body: SignInDto): Promise<IToken> {
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

        return await this.getToken(user);
    }

    async refreshToken(body: RefreshTokenDto): Promise<IToken> {
        const token = body.refreshToken;

        if (!token) throw new BadRequest();

        const payload = await TokenUtil.verifyRefreshToken(token);

        return await this.getToken(payload);
    }
}
