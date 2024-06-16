import { IsNumber, IsString } from "class-validator"

export class CreateReservaDTO{
    @IsString()
    SedeID?: number
    @IsNumber()
    ZonaID?: number
    @IsNumber()
    MesaID?: number
    @IsString()
    Tipo_Consumo?: string
    @IsNumber()
    N_Personas?: number
    @IsString()
    Fecha_Reserva?: string
    @IsString()
    Hora_Reserva?: string
    @IsNumber()
    DetalleReservaID?: number
}