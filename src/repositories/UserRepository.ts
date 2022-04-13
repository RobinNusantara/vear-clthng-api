import { Repository } from "@apps/common/base/Repository";
import { Role } from "@apps/common/enums/RoleEnum";
import { Status } from "@apps/common/enums/StatusEnum";
import { IUniqueProps } from "@apps/common/interfaces/UniquePropsInterface";
import { PasswordUtil } from "@apps/common/utils/PasswordUtil";
import { SignUpDto } from "@apps/dtos/AuthDto";
import { UserModel } from "@apps/models/UserModel";
import { injectable } from "inversify";
import { Op, Transaction } from "sequelize";

@injectable()
export class UserRepository extends Repository<UserModel> {
    async insert(params: {
        body: SignUpDto;
        transaction: Transaction;
    }): Promise<UserModel> {
        const { body, transaction } = params;

        const password = await PasswordUtil.encryptPassword(10, body.password);

        const user = await UserModel.create(
            {
                email: body.email,
                username: body.username,
                password,
                role: Role.User,
                status: Status.WaitingApproval,
            },
            { transaction },
        );

        return user;
    }

    async indexes(): Promise<Array<UserModel>> {
        throw new Error("Method not implemented.");
    }

    async index(params: {
        props: IUniqueProps<"id" | "email" | "username">;
    }): Promise<UserModel | null> {
        const { props } = params;

        const user = await UserModel.findOne({
            where: {
                [props.key]: {
                    [Op.eq]: props.value,
                },
            },
        });

        return user;
    }

    update(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    delete(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
