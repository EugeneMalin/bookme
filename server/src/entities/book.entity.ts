import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IBook } from "./book.interface";

@Entity()
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
