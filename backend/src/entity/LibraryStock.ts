import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { LibraryStockDTO } from '../../../models';
import { User } from './User';
import { Category } from './Category';

@Entity()
export class LibraryStock {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    title: string;

    @Column({ type: 'text', nullable: true })
    author: string;

    @Column()
    serialNumber: number;

    @Column({ nullable: true })
    imgUrl: string;

    @Column({ nullable: true })
    status: string;

    @ManyToOne(() => User, user => user.libraryStock, {
        eager: true,
        cascade: true
    })
    borrower: User;

    @ManyToMany(() => Category, {
        eager: true,
        onDelete: 'CASCADE'
    })
    @JoinTable()
    categories: Category[];

    
}