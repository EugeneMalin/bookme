import { IBook } from "../../data/interface/IBook";
import { DELETE_BOOK } from "../actions/deleteBook";

/**
 * Creator for delete book actions
 * @param book deleting item
 */
export function deleteBook(book: IBook) {
    return {
        type: DELETE_BOOK,
        book
    }
}