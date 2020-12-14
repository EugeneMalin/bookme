import { IUser } from "../../data/interface/IUser";
import { UPDATE_USER } from "../actions/updateUser";

/**
 * Creator for update user actions
 * @param userData user or changed fields of user
 */
export function updateUser(userData: Partial<IUser>) {
    return {
        type: UPDATE_USER,
        userData
    }
}
