import { IsString } from "class-validator"

export class CreateSedeDTO{
    @IsString()
    Descripcion?: string
}