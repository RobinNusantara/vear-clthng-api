import { Repository } from "@apps/common/base/Repository";
import { injectable } from "inversify";

@injectable()
export class UserRepository extends Repository<string> {
    async insert(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async indexes(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    async index(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    update(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    delete(): Promise<any> {
        throw new Error("Method not implemented.");
    }
}
