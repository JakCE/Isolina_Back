import { IsString } from "class-validator"

export class CreateCargoDTO{
    @IsString()
    Descripcion?: string
}