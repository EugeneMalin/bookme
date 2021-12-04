import { createStore } from "redux";
import { IPerson } from "./data/person";
import { User } from "./data/user";
import reducers from "./reducers";

export interface IStore {
    user: null|User;
    persons: IPerson[];
    tabId: string;
}

export const store = createStore(reducers);
