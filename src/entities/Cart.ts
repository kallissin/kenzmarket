import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import User from './User';
import Item from './Item';


@Entity('Carts')
export default class Cart {
    @PrimaryGeneratedColumn('uuid')
    cartId!: string;


    @UpdateDateColumn()
    updatedOn!: Date;


    @Column({ type: "float" })
    total!: number;

    
    @OneToMany(() => Item, item => item.cart)
    items!:Item[]

    @OneToOne(() => User) @JoinColumn()
    user!: User;
}