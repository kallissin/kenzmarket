import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert} from "typeorm";
import bcrypt from 'bcrypt';


@Entity('Users')
export default class User {
    @PrimaryGeneratedColumn('uuid')
    userId!: string;

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
}