import { Repository } from "@apps/common/base/Repository";
import { IUniqueProps } from "@apps/common/interfaces/UniquePropsInterface";
import { UserUniqueProp } from "@apps/common/types/UserUniquePropType";
import { PasswordUtil } from "@apps/common/utils/PasswordUtil";
import { SignUpDto } from "@apps/dtos/AuthDto";
import { User, Role as UserRole } from "@prisma/client";
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

    async indexes(params: {
        page: number;
        limit: number;
        username: string;
        role: UserRole;
    }): Promise<{ count: number; rows: Array<User> }> {
        const { page, limit, username, role } = params;

        const offset = (page - 1) * limit;

        const count = await this._prisma.user.count({
            where: {
                username,
                role,
            },
        });

        const users = await this._prisma.user.findMany({
            skip: offset,
            take: limit,
            where: {
                username,
                role,
            },
            select: {
                id: true,
                email: true,
                username: true,
                role: true,
            },
            orderBy: {
                createdAt: "asc",
            },
        });

        const results = {
            count,
            rows: users as Array<User>,
        };

        return results;
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
