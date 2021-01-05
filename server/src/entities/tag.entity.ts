import { Column, PrimaryGeneratedColumn } from "typeorm";
import { ITag } from "./tag.interface";

export class Tag implements ITag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
}
