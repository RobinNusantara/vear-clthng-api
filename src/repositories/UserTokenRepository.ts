import { Repository } from "@apps/common/base/Repository";
import { UserTokenModel } from "@apps/models/UserTokenModel";
import { Transaction } from "sequelize";

export class UserTokenRepository extends Repository<UserTokenModel> {
    async insert(params: {
        data: {
            idUserFk: string;
            value: string;
        };
        transaction: Transaction;
    }): Promise<UserTokenModel> {
        const { data, transaction } = params;

        const token = await UserTokenModel.create(
            {
                idUserFk: data.idUserFk,
                value: data.value,
            },
            { transaction },
        );

        return token;
    }

    indexes(): Promise<UserTokenModel[]> {
        throw new Error("Method not implemented.");
    }

    index(): Promise<UserTokenModel | null> {
        throw new Error("Method not implemented.");
    }

    update(): Promise<string | number> {
        throw new Error("Method not implemented.");
    }

    delete(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
