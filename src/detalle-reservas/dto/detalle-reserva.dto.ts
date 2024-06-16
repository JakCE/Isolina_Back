import { IsNumber, IsString } from "class-validator"

export class CreateDetalleReservaDTO{
    @IsString()
    Nombres: string
    @IsString()
    Apellidos?: string
    @IsString()
    Email?: string
    @IsNumber()
    Telefono?: number
    @IsString()
    Tipo_Doc?: string
    @IsNumber()
    N_Doc?: number
    @IsString()
    Nombre_RazonS: string
    @IsString()
    Direccion: string
}