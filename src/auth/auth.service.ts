import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { LoginDTO } from './dto/login.dto';
import { RegisterDTO } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usuariosService: UsuariosService,
        private readonly jwtService: JwtService
    ){}

    async login(user: LoginDTO){
        const userFind = await this.usuariosService.findUserByEmail(user.Email);
        if(!userFind){
            throw new UnauthorizedException('Email incorrrecto');
        }
        const isPassValid = await bcryptjs.compare(user.Passw, userFind.Passw);
        if(!isPassValid){
            throw new UnauthorizedException('Contraseña incorrrecta');
        }

        const payload = { email: userFind.Email };
        const tokenjwt = await this.jwtService.signAsync(payload);

        return {
            UserId: userFind.UsuarioID,
            Email: userFind.Email,
            token: tokenjwt
        };
    }

    async register(user: RegisterDTO){
        const userHashed = {
            DNI: user.DNI,
            Nombres: user.Nombres,
            Apellidos: user.Apellidos,
            Email: user.Email,
            Telefono: user.Telefono,
            Direccion: user.Direccion,
            Passw: await bcryptjs.hash(user.Passw, 10)
        }
        return await this.usuariosService.createUser(userHashed);
    }
}