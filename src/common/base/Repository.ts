import { IPaginate } from "@apps/common/interfaces/PaginateInterface";

import { injectable } from "inversify";

@injectable()
export abstract class Repository<T> {
    abstract insert(params: object): Promise<T>;

    abstract indexes(params: object): Promise<IPaginate<T>> | Promise<Array<T>>;

    abstract index(params: object): Promise<T | null>;

    abstract update(params: object): Promise<T>;

    abstract delete(params: object): Promise<boolean>;
}
