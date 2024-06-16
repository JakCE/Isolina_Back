import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'Mesas' })
export class Mesa {
    @PrimaryGeneratedColumn()
    MesaID: number
    @Column({ unique: true })
    Descripcion: string
    @Column()
    N_Mesa?: number
    @Column()
    N_Personas?: number
    @Column()
    ZonaID?: number
    @Column({ type: 'datetime', default: ()=> 'CURRENT_TIMESTAMP' })
    Fecha_Registro: Date
    @Column({ default: 1 })
    Estado: number
}