import { TokenUtil } from "@apps/common/utils/TokenUtil";
import { SignUpDto } from "@apps/dtos/AuthDto";
import { Database } from "@apps/infrastructures/database/Database";
import { REPOSITORY_TYPES } from "@apps/repositories/modules";
import { UserRepository } from "@apps/repositories/UserRepository";
import { UserTokenRepository } from "@apps/repositories/UserTokenRepository";
import { Conflict } from "http-errors";
import { inject, injectable } from "inversify";

@injectable()
export class AuthService {
    constructor(
        @inject(REPOSITORY_TYPES.UserRepository)
        private readonly _userRepository: UserRepository,
        @inject(REPOSITORY_TYPES.UserTokenRepository)
        private readonly _userTokenRepository: UserTokenRepository,
    ) {}

    async signUp(body: SignUpDto): Promise<string> {
        await Promise.all([
            this.isEmailExists(body.email),
            this.isUsernameExists(body.username),
        ]);

        let token = "";
        const transaction = await Database.transaction();

        try {
            const user = await this._userRepository.insert({
                body,
                transaction,
            });

            token = await TokenUtil.generateToken({
                payload: {
                    id: user.getDataValue("id"),
                    email: user.getDataValue("email"),
                    username: user.getDataValue("username"),
                    role: user.getDataValue("role"),
                    status: user.getDataValue("status"),
                },
                expiresIn: "1d",
            });

            await this._userTokenRepository.insert({
                data: {
                    idUserFk: String(user.getDataValue("id")),
                    value: token,
                },
                transaction,
            });

            await transaction.commit();
        } catch (error) {
            if (transaction) {
                await transaction.rollback();
            }
        }

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
