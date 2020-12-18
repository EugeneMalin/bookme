import { IUserInput } from "./IUserInput";

/**
 * Interface for error handling
 */
export interface IUserErrors extends Partial<IUserInput> {
    password?: string;
    rPassword?: string;
    login?: string;
    email?: string;
    name?: string;
}
