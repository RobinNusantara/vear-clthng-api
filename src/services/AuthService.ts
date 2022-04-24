import { config } from "@apps/common/config/AppConfig";
import { IJwtPayload } from "@apps/common/interfaces/JwtPayloadInterface";
import { IToken } from "@apps/common/interfaces/TokenInterface";
import { IUniqueProps } from "@apps/common/interfaces/UniquePropsInterface";
import { PasswordUtil } from "@apps/common/utils/PasswordUtil";
import { TokenUtil } from "@apps/common/utils/TokenUtil";
import { RefreshTokenDto, SignInDto, SignUpDto } from "@apps/dtos/AuthDto";
import { PrimeDatabase } from "@apps/infrastructures/database/PrimeDatabase";
import { REPOSITORY_TYPES } from "@apps/repositories/modules";
import { UserRepository } from "@apps/repositories/UserRepository";
import { Conflict, Unauthorized } from "http-errors";
import { inject, injectable } from "inversify";

@injectable()
export class AuthService {
    constructor(
        @inject(REPOSITORY_TYPES.UserRepository)
        private readonly _userRepository: UserRepository,
    ) {}

    public async signUp(body: SignUpDto): Promise<IToken> {
        await Promise.all([
            this.isUserExists(
                { key: "email", value: body.email },
                "Email already taken!",
            ),
            this.isUserExists(
                { key: "username", value: body.username },
                "Username already taken!",
            ),
        ]);

        const data = await PrimeDatabase.transaction(async (transaction) => {
            const user = await this._userRepository.insert(body, transaction);

            return user;
        });

        const [accessToken, refreshToken] = await this.generateToken({
            id: data.getDataValue("id"),
            email: data.getDataValue("email"),
            username: data.getDataValue("username"),
            role: data.getDataValue("role"),
            status: data.getDataValue("status"),
        });

        return {
            accessToken,
            refreshToken,
        };
    }

    public async signIn(body: SignInDto): Promise<IToken> {
        const user = await this._userRepository.get({
            key: "email",
            value: body.email,
        });

        if (!user) throw new Unauthorized("Email or password is incorrect!");

        await PasswordUtil.validatePassword({
            requestPassword: body.password,
            storedPassword: user.password,
        });

        const [accessToken, refreshToken] = await this.generateToken({
            id: user.getDataValue("id"),
            email: user.getDataValue("email"),
            username: user.getDataValue("username"),
            role: user.getDataValue("role"),
            status: user.getDataValue("status"),
        });

        return {
            accessToken,
            refreshToken,
        };
    }

    public async refreshToken(body: RefreshTokenDto): Promise<IToken> {
        const payload: IJwtPayload = await TokenUtil.verifyRefreshToken(
            body.refreshToken,
        );

        const [accessToken, refreshToken] = await this.generateToken({
            id: payload.id,
            email: payload.email,
            username: payload.username,
            role: payload.role,
            status: payload.status,
        });

        return {
            accessToken,
            refreshToken,
        };
    }

    private async generateToken(payload: IJwtPayload) {
        return await Promise.all([
            TokenUtil.generateToken({
                payload,
                signature: config.token.signature.access,
                expiresIn: "5m",
            }),
            TokenUtil.generateToken({
                payload,
                signature: config.token.signature.refresh,
                expiresIn: "1d",
            }),
        ]);
    }

    /** Validation */
    private async isUserExists(
        props: IUniqueProps<"email" | "username">,
        errorMessage: string,
    ): Promise<boolean> {
        const user = await this._userRepository.get({
            key: props.key,
            value: props.value,
        });

        if (user) throw new Conflict(errorMessage);

        return false;
    }
}
