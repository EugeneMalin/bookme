import { createStore } from "redux";
import { User } from "./data/user";
import reducers from "./reducers";

export interface IStore {
    user: null|User;
}

export const store = createStore(reducers);
