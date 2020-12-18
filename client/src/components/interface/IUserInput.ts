import { IUser } from "../../data/interface/IUser";

/**
 * Interface for user input in user form
 */
export interface IUserInput extends IUser {

    /**
     * Repeat password
     */
    rPassword: string;
}