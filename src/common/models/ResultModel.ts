import { HttpStatus } from "@apps/common/enums/HttpStatusEnum";

export class ResultModel {
    status: HttpStatus;

    data: any;
}
