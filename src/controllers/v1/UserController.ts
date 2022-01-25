import { Controller } from "@apps/common/base/Controller";
import { SERVICE_TYPES } from "@apps/services/modules";
import { UserService } from "@apps/services/UserService";
import { inject } from "inversify";
import { controller, httpGet } from "inversify-express-utils";
import { JsonResult } from "inversify-express-utils/lib/results";

@controller("/v1/users")
export class UserController extends Controller {
    constructor(
        @inject(SERVICE_TYPES.UserService)
        private readonly _userService: UserService,
    ) {
        super();
    }

    @httpGet("/")
    async getUsers(): Promise<JsonResult> {
        const data = await this._userService.getUsers();

        return this.response(data);
    }
}
