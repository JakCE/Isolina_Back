import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'Detalle_Reservas' })
export class DetalleReserva {
    @PrimaryGeneratedColumn()
    DetalleReservaID: number
    @Column()
    Nombres: string
    @Column()
    Apellidos?: string
    @Column()
    Email?: string
    @Column()
    Telefono?: number
    @Column()
    Tipo_Doc?: string
    @Column()
    N_Doc?: number
    @Column()
    Nombre_RazonS: string
    @Column()
    Direccion: string
}