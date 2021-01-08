import { IUser } from "./interface/IUser";
import { Person } from "./Person";

/**
 * User data class
 */
export class User implements IUser {
    id: number;
    login: string;
    email: string;
    password: string;

    constructor(params: IUser) {
        this.login = params.login;
        this.password = params.password;
        this.email = params.email;
        this.id = params.id || -1;
    }

    update(params: IUser): void {
        this.login = params.login;
        this.password = params.password;
        this.email = params.email;
    }
}
