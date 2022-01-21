import { Controller } from "@apps/common/base/Controller";
import { HttpStatus } from "@apps/common/enums/HttpStatusEnum";
import { ResponseFactory } from "@apps/common/factories/ResponseFactory";
import { ValidateData } from "@apps/common/middlewares/ValidateDataMiddleware";
import { SignInDto, SignUpDto } from "@apps/dtos/AuthDto";
import { UserService } from "@apps/services/UserService";
import { controller, httpPost, requestBody } from "inversify-express-utils";
import { JsonResult } from "inversify-express-utils/lib/results";

@controller("/auth")
export class AuthController extends Controller {
    constructor(private readonly _userService: UserService) {
        super();
    }

    @httpPost("/sign-up", ValidateData.requestBody(SignUpDto))
    async signUp(@requestBody() body: SignUpDto): Promise<JsonResult> {
        const data = await this._userService.signUp(body);

        const status = HttpStatus.Ok;
        const response = ResponseFactory.successResponse(status, data);

        return this.json(response, status);
    }

    @httpPost("/sign-in", ValidateData.requestBody(SignInDto))
    async signIn(@requestBody() body: SignInDto): Promise<JsonResult> {
        const data = await this._userService.signIn(body);

        const status = HttpStatus.Ok;
        const response = ResponseFactory.successResponse(status, data);

        return this.json(response, status);
    }
}
