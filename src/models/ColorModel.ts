import { Model } from "@apps/common/base/Model";
import { Table, Column, DataType } from "sequelize-typescript";

interface IColorModel {
    id: number;
    name: string;
    hexColor: string;
}

@Table({ tableName: "colors" })
export class ColorModel
    extends Model<IColorModel, IColorModel>
    implements IColorModel
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
        field: "hex_color",
        type: DataType.STRING(255),
        unique: true,
        allowNull: false,
    })
    hexColor: string;
}
