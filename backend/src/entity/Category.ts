import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { LibraryStock } from "./LibraryStock";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    
}