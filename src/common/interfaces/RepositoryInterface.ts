export interface IRepository<T> {
    insert(params: object): Promise<T>;
    indexes(params?: object): Promise<Array<T>>;
    index(params: object): Promise<T | null>;
    update(params: object): Promise<T>;
    delete(params: object): Promise<boolean>;
}
