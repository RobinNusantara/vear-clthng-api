import {
    Model,
    Table,
    Column,
    DataType,
    ForeignKey,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
    BelongsTo,
} from "sequelize-typescript";
import { UserModel } from "./UserModel";

interface IUserTokenModel {
    id?: number;
    idUserFk: string;
    value: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

@Table({ tableName: "user_tokens" })
export class UserTokenModel
    extends Model<IUserTokenModel, IUserTokenModel>
    implements IUserTokenModel
{
    @Column({
        type: DataType.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    })
    id?: number;

    @Column({
        field: "id_user_fk",
        type: DataType.UUID,
        allowNull: false,
    })
    @ForeignKey(() => UserModel)
    idUserFk: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    value: string;

    @BelongsTo(() => UserModel)
    user: UserModel;

    @Column({
        field: "created_at",
        type: DataType.DATE,
        allowNull: false,
    })
    @CreatedAt
    createdAt?: Date;

    @Column({
        field: "updated_at",
        type: DataType.DATE,
        allowNull: false,
    })
    @UpdatedAt
    updatedAt?: Date;

    @Column({
        field: "deleted_at",
        type: DataType.DATE,
        allowNull: true,
    })
    @DeletedAt
    deletedAt?: Date;
}
