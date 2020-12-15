import { Store } from "redux";
import { IStore } from "../../data/interface/IStore";

/**
 * Interface of aplication props
 */
export interface IApp {
    /**
     * Base store off aplication
     */
    store: Store<IStore>

    /**
     * СSS classes form with classes modifier
     */
    classes: {
        header: string,
        main: string,
        footer: string
    }
}