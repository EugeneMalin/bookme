import { IUser } from "../data/user";
import { IUserAction, UserAction } from "../actions/user";

export const reducer = (store: IUser|null = null, action: IUserAction) => {
    switch(action.type) {
        case UserAction.Update:
            if (!action.user) return store;
            if (store) {
                store = {...store, ...action.user}
            }
            return store;
        case UserAction.Unset: 
            return null;
        case UserAction.Set: 
            return action.user;
        default:
            return null;
    }
}