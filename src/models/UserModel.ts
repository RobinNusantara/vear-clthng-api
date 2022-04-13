import { Role } from "@apps/common/enums/RoleEnum";
import { Status } from "@apps/common/enums/StatusEnum";
import {
    Model,
    Table,
    Column,
    DataType,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
    HasMany,
} from "sequelize-typescript";
import { UserTokenModel } from "./UserTokenModel";

interface IUserModel {
    id?: string;
    username: string;
    email: string;
    password: string;
    role: Role;
    status: Status;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

@Table({ tableName: "users" })
export class UserModel
    extends Model<IUserModel, IUserModel>
    implements IUserModel
{
    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    })
    id?: string;

    @Column({
        type: DataType.STRING(255),
        unique: true,
        allowNull: false,
    })
    username: string;

    @Column({
        type: DataType.STRING(255),
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
    })
    password: string;

    @Column({
        type: DataType.ENUM,
        defaultValue: Role.User,
        values: [Role.Admin, Role.User],
        allowNull: false,
    })
    role: Role;

    @Column({
        type: DataType.TINYINT,
        defaultValue: Status.WaitingApproval,
        allowNull: false,
    })
    status: Status;

    @HasMany(() => UserTokenModel)
    tokens: Array<UserTokenModel>;

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
