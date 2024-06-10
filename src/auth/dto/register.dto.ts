import { Transform } from 'class-transformer';
import { IsEmail, IsNumber, IsString } from 'class-validator';

export class RegisterDTO{
    @IsNumber()
    DNI: number
    @IsString()
    Nombres: string
    @IsString()
    Apellidos: string
    @IsEmail()
    Email: string
    @IsNumber()
    Telefono: number
    @IsString()
    Direccion: string
    @Transform(({ value }) => value.trim())
    @IsString()
    Passw: string
}