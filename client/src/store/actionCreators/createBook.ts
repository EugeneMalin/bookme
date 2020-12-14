import { IBook } from "../../data/interface/IBook";
import { CREATE_BOOK } from "../actions/createBook";

/**
 * Creator for book create actions
 * @param book created item
 */
export function createBook(book: IBook) {
    return {
        type: CREATE_BOOK,
        book
    }
}