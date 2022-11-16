import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Accounts {
    @PrimaryGeneratedColumn()
    id: number 

    @Column({type: 'text'})
    balance: string  

}