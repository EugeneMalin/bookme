import { IUser } from "../../data/interface/IUser";
import { LOGIN_USER } from "../actions/loginUser";

/**
 * Creator for create user actions
 * @param user new valid user
 */
export function loginUser(user: IUser) {
    return {
        type: LOGIN_USER,
        user
    }
}
