import { IUser } from "../../data/interface/IUser";
import { DELETE_USER } from "../actions/deleteUser";

/**
 * Creator for delete user action
 * @param user old user
 */
export function deleteUser(user: IUser) {
    return {
        type: DELETE_USER,
        user
    }
}
