import { IUserAction } from "../../data/interface/IUserAction";

export function userReducer(state = {}, action: IUserAction) {
    switch(action.type) {
        default:
            return state;
    }
}