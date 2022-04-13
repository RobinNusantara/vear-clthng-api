import { Controller } from "@apps/common/base/Controller";
import { HttpStatus } from "@apps/common/enums/HttpStatusEnum";
import { ResponseFactory } from "@apps/common/factories/ResponseFactory";
import { SignUpDto } from "@apps/dtos/AuthDto";
import { AuthService } from "@apps/services/AuthService";
import { SERVICE_TYPES } from "@apps/services/modules";
import { inject } from "inversify";
import { controller, httpPost, requestBody } from "inversify-express-utils";
import { JsonResult } from "inversify-express-utils/lib/results";

@controller("/v1/auth")
export class AuthController extends Controller {
    constructor(
        @inject(SERVICE_TYPES.AuthService)
        private readonly _authService: AuthService,
    ) {
        super();
    }

    @httpPost("/sign-up")
    async signUp(@requestBody() body: SignUpDto): Promise<JsonResult> {
        const data = await this._authService.signUp(body);

        const status = HttpStatus.Ok;
        const response = ResponseFactory.successResponse(status, data);

        return this.json(response, status);
    }

    @httpPost("/sign-in")
    async signIn(): Promise<JsonResult> {
        const data = await this._authService.signIn();

        const status = HttpStatus.Ok;
        const response = ResponseFactory.successResponse(status, data);

        return this.json(response, status);
    }
}
