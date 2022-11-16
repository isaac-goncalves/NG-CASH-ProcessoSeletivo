import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"

import { Accounts } from "./Accounts";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string ;

    @Column()
    password: string ;

    @OneToOne(() => Accounts)
    @JoinColumn() 
    accountid: Accounts ;
}
