import md5 from "md5";
import { Person } from "src/person/person.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "./user.interface";

@Entity()
export class User implements IUser {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    email: string;

    @Column({nullable: false, length: 16})
    login: string;

    @Column({nullable: false, length: 16})
    password: string;

    @OneToOne(type => Person, {nullable: true, cascade: true})
    @JoinColumn()
    person: Person;

    static hashPassword(password: string): string {
        return md5(password);
    }
}
