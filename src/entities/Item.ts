import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Cart from './Cart';
import Product from './Product';

@Entity('Items')
export default class Item {
    @PrimaryGeneratedColumn('uuid')
    itemId!: string;


    @Column({ type: "int" })
    quantity!: number;


    @ManyToOne(type => Cart, cart => cart.items)
    cart!: Cart

    
    @ManyToOne(type => Product, product => product.items)
    product!: Product
}