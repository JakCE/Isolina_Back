import { IsNumber, IsString } from "class-validator"

export class CreateCartaDTO{
    @IsString()
    Titulo: string
    @IsString()
    Descripcion?: string
    @IsNumber()
    Precio?: number
}