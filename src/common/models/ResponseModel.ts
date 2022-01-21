import { ResultModel } from "@apps/common/models/ResultModel";
import { ErrorModel } from "@apps/common/models/ErrorModel";

interface IResponseModel {
    success: boolean;
    error: ErrorModel | null;
    results: ResultModel | null;
}

export class ResponseModel implements IResponseModel {
    success: boolean;

    error: ErrorModel | null;

    results: ResultModel | null;
}
