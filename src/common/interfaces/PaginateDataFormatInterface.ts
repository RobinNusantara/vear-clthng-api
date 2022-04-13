import { IPageFormat } from "@apps/common/interfaces/PageFormatInterface";

export interface IPaginateDataFormat {
    pagination: IPageFormat;
    rows: Array<any>;
}
