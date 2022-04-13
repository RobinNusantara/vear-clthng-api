import { injectable } from "inversify";

@injectable()
export abstract class Repository<TModel> {
    abstract insert(): Promise<number | string>;

    abstract indexes(): Promise<Array<TModel>>;

    abstract index(): Promise<TModel>;

    abstract update(): Promise<number | string>;

    abstract delete(): Promise<boolean>;
}
