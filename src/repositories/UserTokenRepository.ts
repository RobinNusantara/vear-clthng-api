import { Repository } from "@apps/common/base/Repository";
import { UserTokenModel } from "@apps/models/UserTokenModel";
import { Transaction } from "sequelize";

export class UserTokenRepository extends Repository<UserTokenModel> {
    public async insert(
        body: {
            idUserFk: string;
            value: string;
        },
        transaction: Transaction,
    ): Promise<UserTokenModel> {
        const token = new UserTokenModel();

        token.setDataValue("idUserFk", body.idUserFk);
        token.setDataValue("value", body.value);

        await token.save({ transaction });

        return token;
    }

    public insertMany(): Promise<Array<UserTokenModel>> {
        throw new Error("Method not implemented.");
    }

    public get(): Promise<UserTokenModel> {
        throw new Error("Method not implemented.");
    }

    public getMany(): Promise<Array<UserTokenModel>> {
        throw new Error("Method not implemented.");
    }

    public getAndCountAll(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public update(): Promise<string | number> {
        throw new Error("Method not implemented.");
    }

    public delete(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}
