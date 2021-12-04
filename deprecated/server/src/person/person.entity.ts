import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IPerson } from "./person.interface";

/**
 * Person without user is book author
 */
@Entity()
export class Person implements IPerson {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    patronymic: string;
}
