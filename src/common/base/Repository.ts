import { injectable } from "inversify";
import { Transaction } from "sequelize/types";
import { IDataPagination } from "../interfaces/DataPaginationInterface";
import { IUniqueProps } from "../interfaces/UniquePropsInterface";

@injectable()
export abstract class Repository<TModel> {
    public abstract insert(
        body: Record<string, any>,
        transaction?: Transaction,
    ): Promise<TModel>;

    public abstract insertMany(
        body: Record<string, any>,
        transaction?: Transaction,
    ): Promise<Array<TModel>>;

    public abstract get(
        props: IUniqueProps<any>,
        transaction?: Transaction,
    ): Promise<TModel>;

    public abstract getMany(
        params: Record<string, any>,
    ): Promise<Array<TModel>>;

    public abstract getAndCountAll(
        params: Record<string, any>,
    ): Promise<IDataPagination<TModel>>;

    public abstract update(
        params: Record<string, any>,
        transaction?: Transaction,
    ): Promise<number | string>;

    public abstract delete(
        params: Record<string, any>,
        transaction?: Transaction,
    ): Promise<boolean>;
}
