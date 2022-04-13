import {
    Model,
    Table,
    Column,
    DataType,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
} from "sequelize-typescript";

interface IUserModel {
    id?: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

@Table({ tableName: "users" })
export class UserModel
    extends Model<IUserModel, IUserModel>
    implements IUserModel
{
    @Column({
        type: DataType.UUIDV4,
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
        field: "created_at",
        type: DataType.DATE,
        allowNull: false,
    })
    @CreatedAt
    createdAt: Date;

    @Column({
        field: "updated_at",
        type: DataType.DATE,
        allowNull: false,
    })
    @UpdatedAt
    updatedAt: Date;

    @Column({
        field: "deleted_at",
        type: DataType.DATE,
        allowNull: true,
    })
    @DeletedAt
    deletedAt: Date;
}
