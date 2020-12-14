import { IBaseAction } from "./IBaseAction";
import { IBook } from "./IBook";

export interface IBookAction extends IBaseAction {
    book: IBook;
    bookData?: Partial<IBook>;
}