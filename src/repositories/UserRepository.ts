import { Repository } from "@apps/common/base/Repository";
import { IUniqueProps } from "@apps/common/interfaces/UniquePropsInterface";
import { UserUniqueProp } from "@apps/common/types/UserUniquePropType";
import { PasswordUtil } from "@apps/common/utils/PasswordUtil";
import { SignUpDto } from "@apps/dtos/AuthDto";
import { User } from "@prisma/client";
import { injectable } from "inversify";

@injectable()
export class UserRepository extends Repository<User> {
    async insert(params: { body: SignUpDto }): Promise<User> {
        const { body } = params;

        const password = await PasswordUtil.encryptPassword(10, body.password);

        const user = await this._prisma.user.create({
            data: {
                email: body.email,
                username: body.username,
                password,
            },
        });

        return user;
    }

    async indexes(): Promise<Array<User>> {
        return await this._prisma.user.findMany();
    }

    async index(params: {
        props: IUniqueProps<UserUniqueProp>;
    }): Promise<User | null> {
        const { props } = params;

        const user = await this._prisma.user.findUnique({
            where: {
                [props.key]: props.value,
            },
        });

        return user;
    }

    update(): Promise<User> {
        throw new Error("Method not implemented.");
    }

    delete(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
