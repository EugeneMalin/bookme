import { Store } from "redux";
import { IStore } from "../../data/interface/IStore";

export interface IApp {
    store: Store<IStore>
}