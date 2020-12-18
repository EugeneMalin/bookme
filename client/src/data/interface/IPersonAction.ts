import { IBaseAction } from "./IBaseAction";
import { IPerson } from "./IPerson";

/**
 * People action interface
 */
export interface IPersonAction extends IBaseAction {

    /**
     * Single person
     */
    person?: IPerson;

    /**
     * List of people
     */
    people?: IPerson[];
}