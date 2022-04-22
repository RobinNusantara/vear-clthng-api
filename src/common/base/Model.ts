import {
    Model as BaseModel,
    Column,
    DataType,
    CreatedAt,
    UpdatedAt,
    DeletedAt,
} from "sequelize-typescript";

interface IBaseModel {
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
}

export class Model<TModelAttributes, TCreationAttributes>
    extends BaseModel<TModelAttributes, TCreationAttributes>
    implements IBaseModel
{
    @Column({
        field: "created_at",
        allowNull: false,
        type: DataType.DATE,
    })
    @CreatedAt
    createdAt: Date;

    @Column({
        field: "updated_at",
        allowNull: false,
        type: DataType.DATE,
    })
    @UpdatedAt
    updatedAt: Date;

    @Column({
        field: "deleted_at",
        allowNull: true,
        type: DataType.DATE,
    })
    @DeletedAt
    deletedAt?: Date;
}
