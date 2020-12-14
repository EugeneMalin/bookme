import { IBook } from "./IBook";
import { IPerson } from "./IPerson";
import { IUser } from "./IUser";

/**
 * Interface of datastore
 */
export interface IStore {
    /**
     * Active user of application
     */
    user?: IUser;

    /**
     * Peoples that have account
     */
    people: IPerson[];

    /**
     * User books records with public access
     */
    books: IBook[];
}
