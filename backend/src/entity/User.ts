import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { LibraryStock } from "./LibraryStock";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    idCardNumber: number;

    @Column()
    adress: string;

    @Column()
    phone: string;

    @OneToMany(type => LibraryStock, libraryStock => libraryStock.borrower)
    libraryStock: LibraryStock[];

}
