import { IFilter } from "./filter.interface";

/**
 * Interface of list methods options
 */
export interface IListParams {
    page: number;
    limit: number;
    filter: IFilter;
}
