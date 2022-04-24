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
    public async insert(params: {
        body: SignUpDto;
        transaction: Transaction;
    }): Promise<UserModel> {
        const { body, transaction } = params;

        const password = await PasswordUtil.encryptPassword(10, body.password);

        const user = new UserModel();

        user.setDataValue("email", body.email);
        user.setDataValue("username", body.username);
        user.setDataValue("password", password);
        user.setDataValue("role", Role.User);
        user.setDataValue("status", Status.WaitingApproval);

        await user.save({ transaction });

        return user;
    }

    public async insertMany(): Promise<Array<UserModel>> {
        throw new Error("Method not implemented.");
    }

    public async get(
        props: IUniqueProps<"id" | "email" | "username">,
    ): Promise<UserModel> {
        const user = await UserModel.findOne({
            where: {
                [props.key]: {
                    [Op.eq]: props.value,
                },
            },
        });

        return user as UserModel;
    }

    public async getMany(): Promise<Array<UserModel>> {
        throw new Error("Method not implemented.");
    }

    public async getAndCountAll(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async update(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async delete(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
