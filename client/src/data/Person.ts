import { IPerson } from "./interface/IPerson";
import { IUser } from "./interface/IUser";

export class Person implements IPerson {
    name: string = '';
    surname: string|undefined = '';
    patronymic: string|undefined = '';
    about: string|undefined = '';
    gender: boolean|undefined = undefined;
    id: number = 0;

    constructor(personData: IPerson | IUser) {
        this.name = personData.name;
        this.surname = personData.surname;
        this.patronymic = personData.patronymic;
        this.about = personData.about;
        this.gender = personData.gender;
        this.id = personData.id || 0;
    }

    isEqual(other: IPerson): boolean {
        return this.id === other.id;
    }

    getFullName(): string {
        return `${this.surname} ${this.name} ${this.patronymic}`.trim();
    }
}