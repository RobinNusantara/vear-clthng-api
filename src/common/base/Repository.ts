import { injectable } from "inversify";
import { IDataPagination } from "@apps/common/interfaces/DataPaginationInterface";

@injectable()
export abstract class Repository<TModel> {
    abstract insert(params: Record<string, any>): Promise<TModel>;

    abstract indexes(
        params: Record<string, any>,
    ): Promise<Array<TModel>> | Promise<IDataPagination<TModel>>;

    abstract index(params: Record<string, any>): Promise<TModel | null>;

    abstract update(params: Record<string, any>): Promise<number | string>;

    abstract delete(params: Record<string, any>): Promise<boolean>;
}
