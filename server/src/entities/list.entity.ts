import { Column, PrimaryGeneratedColumn } from "typeorm";
import { IList } from "./list.interface";

export class List implements IList {

    @PrimaryGeneratedColumn()
    id: string;
    
    @Column()
    name: string;

    @Column()
    public: boolean;
}
