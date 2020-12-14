import { IBookAction } from "../../data/interface/IBookAction";

export function bookReducer(state = {}, action: IBookAction) {
    switch(action.type) {
        default:
            return state;
    }
}