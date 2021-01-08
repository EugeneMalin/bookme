import { User } from "../../data/User";
import { LOG_IN, LOG_OUT, SystemActionTypes } from "./types";

export function logIn(user: User): SystemActionTypes {
    return {
        type: LOG_IN,
        meta: {
            user
        }
    }
}

export function logOut(): SystemActionTypes {
    return {
        type: LOG_OUT
    }
}
