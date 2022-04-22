import { Model } from "@apps/common/base/Model";
import { Table, Column, DataType } from "sequelize-typescript";

interface IBrandModel {
    id: number;
    name: string;
    label: string;
}

@Table({ tableName: "brands" })
export class BrandModel
    extends Model<IBrandModel, IBrandModel>
    implements IBrandModel
{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    })
    id: number;

    @Column({
        type: DataType.STRING(255),
        unique: true,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING(255),
        unique: true,
        allowNull: false,
    })
    label: string;
}
