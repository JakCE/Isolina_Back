import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'Pedidos' })
export class Pedido {
    @PrimaryGeneratedColumn()
    PedidoID: number
    @Column()
    MesaID?: number
    @Column()
    UsuarioID?: number
    @Column()
    ColaboradorID?: number
    @Column()
    SedeID?: number
    @Column()
    ZonaID?: number
    @Column()
    ReservaID?: number
    @Column()
    Monto_Total?: number
    @Column()
    Estado_Pedido?: string
    @Column()
    Fecha?: string
    @Column()
    Hora?: string
    @Column({ type: 'datetime', default: ()=> 'CURRENT_TIMESTAMP' })
    Fecha_Registro: Date
    @Column({ default: 1 })
    Estado: number
}