import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, OneToMany } from 'typeorm';
import Item from './Item';


@Entity('Carts')
export default class Cart {
    @PrimaryGeneratedColumn('uuid')
    id!: string;


    @UpdateDateColumn()
    updatedOn!: Date;


    @Column({ type: "float" })
    total!: number;

    
    @OneToMany(type => Item, item => item.cart)
    items!:Item[]
}