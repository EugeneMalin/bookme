import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IMark } from "./mark.interface";

@Entity()
export class Mark implements IMark {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    bookId: number;

    @Column()
    userId: number;

    @Column()
    count: number;

    @Column()
    description: string;
}