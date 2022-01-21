import { HttpStatus } from "@apps/common/enums/HttpStatusEnum";

export class ErrorModel {
    status: HttpStatus;

    messages: any;
}
