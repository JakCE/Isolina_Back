import { IsNumber, IsString } from "class-validator"

export class CreateMesaDTO{
    @IsString()
    Descripcion?: string
    @IsNumber()
    N_Mesa?: number
    @IsNumber()
    N_Personas?: number
    @IsNumber()
    ZonaID?: number
}