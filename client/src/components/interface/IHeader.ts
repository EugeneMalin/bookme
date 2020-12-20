import { IUser } from "../../data/interface/IUser";

/**
 * Header component props interface
 */
export interface IHeader {
    classes?: {
        wrapper: string,
        icon: string,
        header: string,
        fieldsWrapper: string
    },
    className: string;
    user?: IUser;
}
