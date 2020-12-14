import { IBook } from "../../data/interface/IBook";
import { UPDATE_BOOK } from "../actions/updateBook";

/**
 * Creator for updating book actions
 * @param book changing book
 * @param bookData book new fields
 */
export function updateBook(book: IBook, bookData: Partial<IBook>) {
    return {
        type: UPDATE_BOOK,
        book,
        bookData
    }
}