import { IBook } from "./IBook";
import { IPerson } from "./IPerson";
import { IUser } from "./IUser";

/**
 * Interface of page items
 */
export interface IPage {
    /**
     * Logged user
     */
    user?: IUser;
    books: IBook[];
    people: IPerson[];
}
