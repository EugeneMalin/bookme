import { Book } from "src/book/book.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { IList } from "./list.interface";

@Entity()
export class List implements IList {

    @PrimaryGeneratedColumn()
    id: string;
    
    @Column()
    name: string;

    @Column()
    public: boolean;

    @ManyToMany(type => Book, book => book.lists) 
    @JoinTable()
    books: Book[];

    @ManyToMany(type => User, user => user.lists)
    users: User[];
}
