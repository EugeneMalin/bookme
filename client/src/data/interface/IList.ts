import { IBook } from "./IBook";

/**
 * Group of books interface
 */
export interface IList {
    /**
     * Name of list
     */
    name: string;

    /**
     * Short mark of list
     */
    mark: string;

    /**
     * Is list avaliable for other users
     */
    isPublic: boolean;

    /**
     * List with linked books
     */
    books: IBook[];
}
