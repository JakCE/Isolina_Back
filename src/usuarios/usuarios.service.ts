import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UsuariosService {
    constructor(@InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>){}
    
    async createUser(user: CreateUserDTO){
        const userFound = await this.usuarioRepository.findOne({
            where: {
                DNI: user.DNI
            }
        })

        if(userFound){
            return new HttpException('El usuario ya se encuentra registrado', HttpStatus.CONFLICT)
        }

        const newUser = this.usuarioRepository.create(user);
        return this.usuarioRepository.save(newUser);
    }

    getUsers(){
        return this.usuarioRepository.find()
    }

    async getUser(UsuarioID: number){
        const userFound = await this.usuarioRepository.findOne({
            where: {
                UsuarioID
            }
        });

        if(!userFound){
            return new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
        }

        return userFound;
    }

    async deleteUser(UsuarioID: number){
        const userFound = await this.usuarioRepository.findOne({
            where: {
                UsuarioID
            }
        })

        if(!userFound){
            return new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND)
        }
        return this.usuarioRepository.delete({ UsuarioID });
    }

    async updateUser(UsuarioID: number, user: UpdateUserDTO){
        const userFound = await this.usuarioRepository.findOne({
            where: {
                UsuarioID
            }
        })

        if(!userFound){
            return new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND)
        }

        const updateUser = Object.assign(userFound, user);
        return this.usuarioRepository.save(updateUser);
    }

    async findUserByEmail(email: string){
        return await this.usuarioRepository.findOne({
            where: {
                Email: email
            }
        })
    }
}
