export interface IPerson {
    id: number;
    name: string;
    bio?: string;
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
    bio;

    constructor(dto: IPerson) {
        this.id = dto.id;
        this.name = dto.name;
        this.surname = dto.surname || '';
        this.patronymic = dto.patronymic || '';
        this.createdAt = dto.createdAt;
        this.bio = dto.bio || '';
    }

    getFirstChars(): string {
        return `${this.name[0]}${this.surname[0]||''}`.toLocaleUpperCase();
    }

    getFullName(): string {
        return `${this.surname||''} ${this.name} ${this.patronymic||''}`.trim();
    }
}