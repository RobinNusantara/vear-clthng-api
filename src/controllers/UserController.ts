import { Controller } from "@apps/common/base/Controller";
import { UserService } from "@apps/services/UserService";
import { controller, httpGet } from "inversify-express-utils";
import { JsonResult } from "inversify-express-utils/lib/results";

@controller("/users")
export class UserController extends Controller {
    constructor(private readonly _userService: UserService) {
        super();
    }

    @httpGet("/")
    async getUsers(): Promise<JsonResult> {
        const data = await this._userService.getUsers();

        return this.response(data);
    }
}
