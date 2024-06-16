import { IsNumber, IsString } from "class-validator"

export class CreatePedidoDTO{
    @IsNumber()
    MesaID?: number
    @IsNumber()
    UsuarioID?: number
    @IsNumber()
    ColaboradorID?: number
    @IsNumber()
    SedeID?: number
    @IsNumber()
    ZonaID?: number
    @IsNumber()
    ReservaID?: number
    @IsNumber()
    Monto_Total?: number
    @IsString()
    Estado_Pedido?: string
    @IsString()
    Fecha?: string
    @IsString()
    Hora?: string
}