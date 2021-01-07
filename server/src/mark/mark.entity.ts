import { User } from "src/user/user.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IMark } from "./mark.interface";

@Entity()
export class Mark implements IMark {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bookId: number;

    @Column()
    count: number;

    @Column()
    description: string;

    @ManyToOne(type => User, user => user.marks)
    user: User;
}
