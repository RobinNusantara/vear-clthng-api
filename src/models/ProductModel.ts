import { Model } from "@apps/common/base/Model";
import {
    Table,
    Column,
    DataType,
    ForeignKey,
    BelongsTo,
    HasMany,
} from "sequelize-typescript";
import { BrandModel } from "./BrandModel";
import { VariantModel } from "./VariantModel";

interface IProductModel {
    id: string;
    name: string;
    idBrandFk: number;
    price: number;
    description: string;
    // Association
    brand: BrandModel;
    variants: Array<VariantModel>;
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
    id: string;

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
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
    })
    @ForeignKey(() => BrandModel)
    idBrandFk: number;

    @Column({
        type: DataType.DECIMAL(10),
        allowNull: false,
    })
    price: number;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    description: string;

    @BelongsTo(() => BrandModel)
    brand: BrandModel;

    @HasMany(() => VariantModel)
    variants: Array<VariantModel>;
}
