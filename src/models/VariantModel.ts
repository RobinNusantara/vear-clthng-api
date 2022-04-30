import { Model } from "@apps/common/base/Model";
import {
    Table,
    Column,
    DataType,
    ForeignKey,
    BelongsTo,
    BelongsToMany,
} from "sequelize-typescript";
import { ColorModel } from "./ColorModel";
import { PictureModel } from "./PictureModel";
import { PictureOnVariantModel } from "./PictureOnVariantModel";
import { ProductModel } from "./ProductModel";

interface IVariantModel {
    id: string;
    idProductFk: string;
    idColorFk: number;
    // Association
    product: ProductModel;
    color: ColorModel;
    pictures: Array<PictureModel>;
}

@Table({ tableName: "variants" })
export class VariantModel
    extends Model<IVariantModel, IVariantModel>
    implements IVariantModel
{
    @Column({
        type: DataType.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataType.UUIDV4,
    })
    id: string;

    @Column({
        field: "id_product_fk",
        type: DataType.UUID,
        allowNull: false,
    })
    @ForeignKey(() => ProductModel)
    idProductFk: string;

    @Column({
        field: "id_color_fk",
        type: DataType.INTEGER,
        allowNull: true,
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
    })
    @ForeignKey(() => ColorModel)
    idColorFk: number;

    // Association
    @BelongsTo(() => ProductModel)
    product: ProductModel;

    @BelongsTo(() => ColorModel)
    color: ColorModel;

    @BelongsToMany(() => PictureModel, () => PictureOnVariantModel)
    pictures: Array<PictureModel>;
}
