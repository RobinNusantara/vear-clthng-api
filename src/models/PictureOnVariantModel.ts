import { Model } from "@apps/common/base/Model";
import { Column, DataType, ForeignKey, Table } from "sequelize-typescript";
import { PictureModel } from "./PictureModel";
import { VariantModel } from "./VariantModel";

interface IPictureOnVariantModel {
    idVariantFk: number;
    idPictureFk: number;
}

@Table({ tableName: "pictures_on_variants" })
export class PictureOnVariantModel
    extends Model<IPictureOnVariantModel, IPictureOnVariantModel>
    implements IPictureOnVariantModel
{
    @Column({
        field: "id_variant_fk",
        type: DataType.UUID,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })
    @ForeignKey(() => VariantModel)
    idVariantFk: number;

    @Column({
        field: "id_picture_fk",
        type: DataType.UUID,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })
    @ForeignKey(() => PictureModel)
    idPictureFk: number;
}
