import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'Zonas' })
export class Zona {
    @PrimaryGeneratedColumn()
    ZonaID: number
    @Column({ unique: true })
    Descripcion: string
    @Column()
    SedeID: number
    @Column({ default: 1 })
    Estado: number
    @Column({ type: 'datetime', default: ()=> 'CURRENT_TIMESTAMP' })
    Fecha_Registro: Date
}