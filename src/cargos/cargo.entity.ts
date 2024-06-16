import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'Cargos' })
export class Cargo {
    @PrimaryGeneratedColumn()
    CargoID: number
    @Column({ unique: true })
    Descripcion: string
    @Column({ type: 'datetime', default: ()=> 'CURRENT_TIMESTAMP' })
    Fecha_Registro: Date
    @Column({ default: 1 })
    Estado: number
}