import { IPerson, Person } from "./person";

export interface IUser extends IPerson {
    email: string;
    login: string;
    lastLoggedAt?: Date;
}

export class User extends Person implements IUser {
    email = '';
    login = '';
    lastLoggedAt;
    
    constructor(dto: IUser) {
        super(dto);
        this.email = dto.email;
        this.login = dto.login;
        this.lastLoggedAt = dto.lastLoggedAt
    }
}