import { config } from "@apps/common/config/AppConfig";
import { IJwtPayload } from "@apps/common/interfaces/JwtPayloadInterface";
import { IToken } from "@apps/common/interfaces/TokenInterface";
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

    async signUp(body: SignUpDto): Promise<IToken> {
        await Promise.all([
            this.isEmailExists(body.email),
            this.isUsernameExists(body.username),
        ]);

        let token: IToken = {
            accessToken: "",
            refreshToken: "",
        };

        const transaction = await PrimeDatabase.transaction();

        try {
            const user = await this._userRepository.insert({
                body,
                transaction,
            });

            const [accessToken, refreshToken] = await this.generateToken({
                id: user.getDataValue("id"),
                email: user.getDataValue("email"),
                username: user.getDataValue("username"),
                role: user.getDataValue("role"),
                status: user.getDataValue("status"),
            });

            token = {
                accessToken,
                refreshToken,
            };

            await transaction.commit();
        } catch (error) {
            if (transaction) await transaction.rollback();
        }

        return token;
    }

    async signIn(body: SignInDto): Promise<IToken> {
        const user = await this._userRepository.index({
            props: {
                key: "email",
                value: body.email,
            },
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

    async refreshToken(body: RefreshTokenDto): Promise<IToken> {
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
