
import { Entity, PrimaryGeneratedColumn, Column,  ManyToOne } from "typeorm"

import { Accounts } from "./Accounts"

@Entity()
export class Transactions {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Accounts, account => account.id)  
    debitedAccountid: Accounts

    @ManyToOne(() => Accounts, account => account.id)
    creditedAccountid: number

    @Column()
    value: number
}