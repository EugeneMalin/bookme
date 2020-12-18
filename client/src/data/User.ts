import { IUser } from "./interface/IUser";
import { Person } from "./Person";

/**
 * User data class
 */
export class User implements IUser {
    login: string;
    email: string;
    password: string;

    name: string;
    surname: string;
    patronymic: string;

    constructor(params: IUser) {
        this.login = params.login;
        this.password = params.password;
        this.email = params.email;

        this.name = params.name;
        this.surname = params.surname || '';
        this.patronymic = params.patronymic || '';
    }

    getPerson(): Person {
        return new Person(this)
    }
}
