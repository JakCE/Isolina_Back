import { IsNumber } from "class-validator"

export class CreateDetallePedidoDTO{
    @IsNumber()
    Cantidad?: number
    @IsNumber()
    CartaID?: number
    @IsNumber()
    PedidoID?: number
}