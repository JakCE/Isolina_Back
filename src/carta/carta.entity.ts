import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'Carta' })
export class Carta {
    @PrimaryGeneratedColumn()
    CartaID: number
    @Column({ unique: true })
    Titulo: string
    @Column()
    Descripcion?: string
    @Column()
    Precio?: number
    @Column({ type: 'datetime', default: ()=> 'CURRENT_TIMESTAMP' })
    Fecha_Registro: Date
    @Column({ default: 1 })
    Estado: number
}