import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, OneToOne, JoinColumn } from "typeorm";
import bcrypt from 'bcrypt';
import Cart from "./Cart";

@Entity('Users')
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ unique: true })
    email!: string;
    
    @Column()
    name!: string;
    
    @Column()
    password!: string;

    @Column()
    isAdm!: boolean;

    @CreateDateColumn()
    createdOn!: Date;

    @UpdateDateColumn()
    updatedOn!: Date;

    @BeforeInsert()
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 10)
    }

    @OneToOne(type => Cart) @JoinColumn()
    cart!: Cart;
}