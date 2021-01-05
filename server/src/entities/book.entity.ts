import { IBook } from "./book.interface";

export class Book implements IBook {
    id: number;

    authorId: number;

    name: string;

    link?: string;

    description?: string;
}