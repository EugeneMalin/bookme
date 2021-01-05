import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ITag } from "./tag.interface";

@Entity()
export class Tag implements ITag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
}
