import md5 from "md5";
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

    static hashPassword(password: string): string {
        return md5(password);
    }
}
