import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "./user.interface";

@Entity()
export class User implements IUser {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    personId?: number;

    @Column()
    email: string;

    @Column()
    login: string;

    @Column()
    password: string;
}
