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

    public static async validatePassword(
        requestPassword: string,
        storePassword: string,
    ): Promise<boolean> {
        const password = await compare(requestPassword, storePassword);

        if (!password) {
            throw new Unauthorized("Username or password is incorrect");
        }

        return true;
    }
}
