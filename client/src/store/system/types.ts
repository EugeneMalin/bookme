import { User } from "../../data/User";

export interface SystemState {
    user?: User;
    session?: string;
}

export const LOG_IN = 'SYSTEM_LOGIN';
export const LOG_OUT = 'SYSTEM_LOGOUT';

interface LogInAction {
    type: typeof LOG_IN,
    meta: {
        user: User
    }
}

interface LogOutAction {
    type: typeof LOG_OUT
}

export type SystemActionTypes = LogInAction | LogOutAction;
