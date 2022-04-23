import { Model } from "@apps/common/base/Model";
import { ProductStatus as Status } from "@apps/common/enums/ProductStatusEnum";
import {
    Table,
    Column,
    DataType,
    ForeignKey,
    BelongsTo,
    HasMany,
    Scopes,
} from "sequelize-typescript";
import { Op } from "sequelize";
import { BrandModel } from "./BrandModel";
import { VariantModel } from "./VariantModel";

interface IProductModel {
    id: string;
    name: string;
    idBrandFk: number;
    price: number;
    description: string;
    status: Status;
    // Association
    brand: BrandModel;
    variants: Array<VariantModel>;
}

@Table({ tableName: "products" })
@Scopes(() => ({
    isActive: {
        where: {
            status: {
                [Op.ne]: Status.Inactive,
            },
        },
    },
}))
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

    @Column({
        type: DataType.ENUM,
        values: [Status.Active, Status.Inactive],
        allowNull: false,
        defaultValue: Status.Active,
    })
    status: Status;

    @BelongsTo(() => BrandModel)
    brand: BrandModel;

    @HasMany(() => VariantModel)
    variants: Array<VariantModel>;
}
