import { Model } from "@apps/common/base/Model";
import { Table, Column, DataType } from "sequelize-typescript";

interface IPictureModel {
    id: string;
    imageUrl: string;
}

@Table({ tableName: "pictures" })
export class PictureModel
    extends Model<IPictureModel, IPictureModel>
    implements IPictureModel
{
    @Column({
        type: DataType.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataType.UUIDV4,
    })
    id: string;

    @Column({
        field: "image_url",
        type: DataType.TEXT,
        allowNull: true,
    })
    imageUrl: string;
}
