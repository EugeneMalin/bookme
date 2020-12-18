import { IPerson } from "./interface/IPerson";
import { IUser } from "./interface/IUser";

export class Person implements IPerson {
    name: string = '';
    surname: string|undefined = '';
    patronymic: string|undefined = '';
    about: string|undefined = '';
    gender: boolean|undefined = undefined;

    constructor(personData: IPerson | IUser) {
        this.name = personData.name;
        this.surname = personData.surname;
        this.patronymic = personData.patronymic;
        this.about = personData.about;
        this.gender = personData.gender;
    }

    isEqual(other: IPerson): boolean {
        return this.name === other.name && this.surname === other.surname && this.patronymic === other.patronymic;
    }

    getFullName(): string {
        return `${this.surname} ${this.name} ${this.patronymic}`.trim();
    }

    getId(): string {
        return this.name + this.surname + this.patronymic
    }
}