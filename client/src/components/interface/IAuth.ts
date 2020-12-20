import { IUser } from "../../data/interface/IUser";

/**
 * Interface of authetication page
 * - you can create new user
 * - you can login with created
 */
export interface IAuth {
    classes?: {
        fieldsWrapper: string,
        buttons: string,
        button: string,
        field: string,
        errorBag: string
    };
}