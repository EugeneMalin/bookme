import { Person } from "../../data/Person";

/**
 * People component options
 */
export interface IPeople {
    people?: Person[];
    classes?: {
        empty: string
    }
}