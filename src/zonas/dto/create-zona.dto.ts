import { IsNumber, IsString } from "class-validator"

export class CreateZonaDTO{
    @IsString()
    Descripcion?: string
    @IsNumber()
    SedeID?: number
    @IsNumber()
    Estado?: number
}