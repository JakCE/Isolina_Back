import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'Detalle_Pedidos' })
export class DetallePedido {
    @PrimaryGeneratedColumn()
    DetallePedidoID: number
    @Column()
    Cantidad: number
    @Column()
    CartaID?: number
    @Column()
    PedidoID?: number
    @Column({ type: 'datetime', default: ()=> 'CURRENT_TIMESTAMP' })
    Fecha_Registro: Date
    @Column({ default: 1 })
    Estado: number
}