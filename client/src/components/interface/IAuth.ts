import { User } from "../../data/User";

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
    onCommit: (user: User) => void; 
    onReject: () => void;
}