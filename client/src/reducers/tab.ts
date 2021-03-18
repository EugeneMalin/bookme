import { ITabAction, TabAction } from "../actions/tab";
import { DEFAULT_TAB_ID } from "../const";

export const reducer = (store: string = DEFAULT_TAB_ID, action: ITabAction) => {
    switch(action.type) {
        default: 
            return store;
        case TabAction.Change: 
            return action.value;
    }
}