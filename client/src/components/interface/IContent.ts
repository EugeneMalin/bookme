import { IBook } from "../../data/interface/IBook";
import { IPerson } from "../../data/interface/IPerson";
import { IUser } from "../../data/interface/IUser";
import { PAGES } from "../Const";

/**
 * Interface of content component props
 */
export interface IContent {
    /**
     * Identifier of selected page
     */
    id: PAGES;

    /**
     * Class name of component
     */
    className: string;

    /**
     * Class names from with styles
     */
    classes?: {
        book: string;
        people: string;

        base: string;
        spacing: string;
    };

    /**
     * Books for display
     */
    books?: IBook[];

    /**
     * Peoples for display
     */
    people?: IPerson[];

    /**
     * Active user
     */
    user?: IUser;
}
