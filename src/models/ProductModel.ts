import { Model } from "@apps/common/base/Model";
import {
    Table,
    Column,
    DataType,
    ForeignKey,
    BelongsTo,
} from "sequelize-typescript";
import { BrandModel } from "./BrandModel";

interface IProductModel {
    id: number;
    name: string;
    idBrandFk: number;
    brand: BrandModel;
    price: number;
    description: number;
}

@Table({ tableName: "products" })
export class ProductModel
    extends Model<IProductModel, IProductModel>
    implements IProductModel
{
    @Column({
        type: DataType.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataType.UUIDV4,
    })
    id: number;

    @Column({
        type: DataType.STRING(255),
        unique: true,
        allowNull: false,
    })
    name: string;

    @Column({
        field: "id_brand_fk",
        type: DataType.INTEGER,
        allowNull: true,
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
    })
    @ForeignKey(() => BrandModel)
    idBrandFk: number;

    @BelongsTo(() => BrandModel)
    brand: BrandModel;

    @Column({
        type: DataType.DECIMAL(10),
        allowNull: false,
    })
    price: number;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    description: number;
}
