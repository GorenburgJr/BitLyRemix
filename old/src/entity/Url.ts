import { Column, Entity, PrimaryColumn} from "typeorm";

@Entity ()
export class Url {
    
    @PrimaryColumn()
    userId:number

    @Column()
    fromUrl: string

    @Column()
    shortUrl: string

    @Column({type: 'date'})
    date: Date
}