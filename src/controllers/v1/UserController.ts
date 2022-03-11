import { Controller } from "@apps/common/base/Controller";
import {
    access,
    Authentication,
} from "@apps/middlewares/AuthenticationMiddleware";
import { SERVICE_TYPES } from "@apps/services/modules";
import { UserService } from "@apps/services/UserService";
import { inject } from "inversify";
import { controller, httpGet, queryParam } from "inversify-express-utils";
import { JsonResult } from "inversify-express-utils/lib/results";

@controller("/v1/users", Authentication.verify({ roles: access["Admin"] }))
export class UserController extends Controller {
    constructor(
        @inject(SERVICE_TYPES.UserService)
        private readonly _userService: UserService,
    ) {
        super();
    }

    @httpGet("/")
    async getUsers(
        @queryParam("page") page: string,
        @queryParam("limit") limit: string,
        @queryParam("username") username: string,
        @queryParam("role") role: string,
    ): Promise<JsonResult> {
        const data = await this._userService.getUsers({
            page,
            limit,
            username,
            role,
        });

        return this.response(this.paginate(data.count, data.rows));
    }
}
