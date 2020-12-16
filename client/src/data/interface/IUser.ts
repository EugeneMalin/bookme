import { IBook } from "./IBook";
import { IList } from "./IList";
import { IPerson } from "./IPerson";

/**
 * Interface of active user
 */
export interface IUser extends IPerson {
    /**
     * Users contact email address
     */
    email: string,

    /**
     * Mark of user confirmation
     */
    confirmed?: boolean,

    /**
     * System username
     */
    login: string;

    /**
     * Hash of users password
     */
    password: string;

    /**
     * Lists of user books
     */
    lists?: IList[];

    /**
     * List of books without list, they are private by default 
     */
    books?: IBook[];
}
