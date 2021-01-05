import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IList } from "./list.interface";

@Entity()
export class List implements IList {

    @PrimaryGeneratedColumn()
    id: string;
    
    @Column()
    name: string;

    @Column()
    public: boolean;
}
