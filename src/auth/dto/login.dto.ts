import { Transform } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

export class LoginDTO{
    @IsEmail()
    Email: string
    @Transform(({ value }) => value.trim())
    @IsString()
    Passw: string
}
