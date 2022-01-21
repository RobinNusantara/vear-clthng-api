import { IRepository } from "@apps/common/interfaces/RepositoryInterface";
import { PrismaClient } from "@prisma/client";
import { inject, injectable } from "inversify";

@injectable()
export abstract class Repository<T> implements IRepository<T> {
    constructor(
        @inject("PrismaClient") protected readonly _prisma: PrismaClient,
    ) {}

    abstract insert(params: object): Promise<T>;

    abstract indexes(params?: object): Promise<Array<T>>;

    abstract index(params: object): Promise<T | null>;

    abstract update(params: object): Promise<T>;

    abstract delete(params: object): Promise<boolean>;
}
