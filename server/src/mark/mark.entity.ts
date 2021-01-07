import { Book } from "src/book/book.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IMark } from "./mark.interface";

@Entity()
export class Mark implements IMark {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    count: number;

    @Column()
    description: string;

    @ManyToOne(type => User, user => user.marks)
    @JoinColumn()
    user: User;

    @ManyToOne(type => Book, book => book.marks)
    @JoinColumn()
    book: Book;
}
