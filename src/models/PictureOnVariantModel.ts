import { Model } from "@apps/common/base/Model";
import { Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { PictureModel } from "./PictureModel";
import { VariantModel } from "./VariantModel";

interface IPictureOnVariantModel {
    idVariantFk: string;
    idPictureFk: string;
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
    idVariantFk: string;

    @Column({
        field: "id_picture_fk",
        type: DataType.UUID,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
    })
    @ForeignKey(() => PictureModel)
    idPictureFk: string;
}
