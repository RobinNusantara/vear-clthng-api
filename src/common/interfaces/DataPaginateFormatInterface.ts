import { IPageFormat } from "@apps/common/interfaces/PageFormatInterface";

export interface IDataPaginateFormat {
    pagination: IPageFormat;
    rows: Array<any>;
}
