import { IBaseAction } from "./IBaseAction";
import { IUser } from "./IUser";

/**
 * User action interface
 */
export interface IUserAction extends IBaseAction {

    /**
     * Handled user
     */
    user?: IUser;

    /**
     * Source of user fields
     */
    userData?: Partial<IUser>;
}
