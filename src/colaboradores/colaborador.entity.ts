import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'Colaboradores' })
export class Colaborador {
    @PrimaryGeneratedColumn()
    ColaboradorID: number
    @Column()
    UsuarioID: number
    @Column()
    CargoID?: number
    @Column({ type: 'datetime', default: ()=> 'CURRENT_TIMESTAMP' })
    Fecha_Contratacion?: Date
    @Column()
    SedeID?: number
    @Column({ type: 'datetime', default: ()=> 'CURRENT_TIMESTAMP' })
    Fecha_Registro: Date
    @Column({ default: 1 })
    Estado: number
}