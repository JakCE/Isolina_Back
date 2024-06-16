import { IsDate, IsNumber } from "class-validator"

export class CreateColaboradorDTO{
    @IsNumber()
    UsuarioID: number
    @IsNumber()
    CargoID?: number
    @IsDate()
    Fecha_Contratacion?: Date
    @IsNumber()
    SedeID?: number
}