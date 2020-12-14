import { IUser } from "../../data/interface/IUser";
import { LOGOUT_USER } from "../actions/logoutUser";

/**
 * Creator for loggout action
 * @param user active logged in user
 */
export function logoutUser(user: IUser) {
    return {
        type: LOGOUT_USER,
        user
    }
}
