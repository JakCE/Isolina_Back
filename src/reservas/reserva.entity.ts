import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Reservas' })
export class Reserva {
    @PrimaryGeneratedColumn()
    ReservaID: number
    @Column()
    SedeID: number
    @Column()
    ZonaID?: number
    @Column()
    MesaID?: number
    @Column()
    Tipo_Consumo?: string
    @Column()
    N_Personas?: number
    @Column()
    Fecha_Reserva?: string
    @Column()
    Hora_Reserva?: string
    @Column({ type: 'datetime', default: ()=> 'CURRENT_TIMESTAMP' })
    Fecha_Registro: Date
    @Column({ default: 1 })
    Estado: number
    @Column()
    DetalleReservaID?: number
}