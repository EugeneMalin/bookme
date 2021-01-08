import { LOG_IN, LOG_OUT, SystemActionTypes, SystemState } from "./types";

export const initialState: SystemState = {}

export function systemReducer(state = initialState, action: SystemActionTypes): SystemState {
    switch(action.type) {
        case LOG_OUT: 
            return {}
        case LOG_IN: 
            return {
                user: action.meta.user
            }
        default: 
            return state;
    }
}
