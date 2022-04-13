import { injectable } from "inversify";

@injectable()
export abstract class Repository<TModel> {
    abstract insert(
        params: Record<string, any>,
    ): Promise<TModel | number | string | undefined>;

    abstract indexes(params: Record<string, any>): Promise<Array<TModel>>;

    abstract index(params: Record<string, any>): Promise<TModel | null>;

    abstract update(params: Record<string, any>): Promise<number | string>;

    abstract delete(params: Record<string, any>): Promise<boolean>;
}
