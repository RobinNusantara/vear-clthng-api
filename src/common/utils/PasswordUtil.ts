import { genSalt, compare, hash } from "bcryptjs";
import { Unauthorized } from "http-errors";

export class PasswordUtil {
    public static async encryptPassword(
        rounds: number,
        password: string,
    ): Promise<string> {
        const salted: string = await genSalt(rounds);

        const hashed: string = await hash(password, salted);

        return hashed;
    }

    public static async validatePassword(params: {
        requestPassword: string;
        storedPassword: string;
    }): Promise<boolean> {
        const { requestPassword, storedPassword } = params;

        const password = await compare(requestPassword, storedPassword);

        if (!password) {
            throw new Unauthorized("Email or password is incorrect");
        }

        return true;
    }
}
