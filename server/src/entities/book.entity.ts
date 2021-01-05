import { Column, PrimaryGeneratedColumn } from "typeorm";
import { IBook } from "./book.interface";

export class Book implements IBook {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    authorId: number;

    @Column()
    name: string;

    @Column()
    link?: string;

    @Column()
    description?: string;
}