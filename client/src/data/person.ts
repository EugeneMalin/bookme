export interface IPerson {
    id: number;
    name: string;
    surname?: string;
    patronymic?: string;
    createdAt?: Date;
}

export class Person implements IPerson {
    id = 0;
    name = '';
    surname = '';
    patronymic = '';
    createdAt;

    constructor(dto: IPerson) {
        this.id = dto.id;
        this.name = dto.name;
        this.surname = dto.surname || '';
        this.patronymic = dto.patronymic || '';
        this.createdAt = dto.createdAt;
    }
}