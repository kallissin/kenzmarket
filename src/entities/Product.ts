import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Item from "./Item";

@Entity('Products')
export default class Product {
    @PrimaryGeneratedColumn('uuid')
    id!: string;


    @Column({ unique: true })
    name!: string;


    @Column({ type: "int" })
    stock!: number;


    @Column({ type: "float"})
    price!: number;

    
    @OneToMany(type => Item, item => item.product)
    items!:Item[]
}
