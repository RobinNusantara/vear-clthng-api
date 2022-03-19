import { Repository } from "@apps/common/base/Repository";
import { IPaginate } from "@apps/common/interfaces/PaginateInterface";
import { MaterialModel } from "@apps/models/MaterialModel";

export class MaterialRepository extends Repository<MaterialModel> {
    insert(): Promise<MaterialModel> {
        throw new Error("Method not implemented.");
    }
    indexes(): Promise<IPaginate<MaterialModel>> {
        throw new Error("Method not implemented.");
    }
    index(): Promise<MaterialModel | null> {
        throw new Error("Method not implemented.");
    }
    update(): Promise<MaterialModel> {
        throw new Error("Method not implemented.");
    }
    delete(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

    async getMaterialTypes(params: {
        materialIds: Array<number>;
    }): Promise<Array<MaterialModel>> {
        const { materialIds } = params;

        const materials = await this._prisma.material.findMany({
            where: {
                id: {
                    in: materialIds,
                },
            },
            select: {
                materialType: true,
            },
        });

        return materials as Array<MaterialModel>;
    }
}
