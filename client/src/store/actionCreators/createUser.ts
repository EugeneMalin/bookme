import { IUser } from "../../data/interface/IUser";
import { CREATE_USER } from "../actions/createUser";

/**
 * Creator for create user actions
 * @param user new valid user
 */
export function createUser(user: IUser) {
    return {
        type: CREATE_USER,
        user
    }
}
