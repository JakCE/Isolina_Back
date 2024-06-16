import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Colaborador } from './colaborador.entity';
import { Repository } from 'typeorm';
import { CreateColaboradorDTO } from './dto/colaborador.dto';

@Injectable()
export class ColaboradoresService {
    constructor(@InjectRepository(Colaborador) private ColaboradoresRepository: Repository<Colaborador>){}
    
    async createColaborador(Colaborador: CreateColaboradorDTO){
        const ColaboradorFound = await this.ColaboradoresRepository.findOne({
            where: {
                UsuarioID: Colaborador.UsuarioID,
                CargoID: Colaborador.CargoID,
                Fecha_Contratacion: Colaborador.Fecha_Contratacion
            }
        })

        if(ColaboradorFound){
            return new HttpException('El Colaborador ' + ColaboradorFound.UsuarioID + ' ya se encuentra registrada', HttpStatus.CONFLICT)
        }

        const newColaborador = this.ColaboradoresRepository.create(Colaborador);
        return this.ColaboradoresRepository.save(newColaborador);
    }

    getColaboradores(){
        return this.ColaboradoresRepository.find()
    }

    async getColaborador(ColaboradorID: number){
        const ColaboradorFound = await this.ColaboradoresRepository.findOne({
            where: {
                ColaboradorID
            }
        });

        if(!ColaboradorFound){
            return new HttpException('Colaborador no encontrada', HttpStatus.NOT_FOUND);
        }

        return ColaboradorFound;
    }

    async deleteColaborador(ColaboradorID: number){
        const ColaboradorFound = await this.ColaboradoresRepository.findOne({
            where: {
                ColaboradorID
            }
        })

        if(!ColaboradorFound){
            return new HttpException('Colaborador no encontrada', HttpStatus.NOT_FOUND)
        }
        return this.ColaboradoresRepository.delete({ ColaboradorID });
    }

    async updateColaborador(ColaboradorID: number, Colaborador: CreateColaboradorDTO){
        const ColaboradorFound = await this.ColaboradoresRepository.findOne({
            where: {
                ColaboradorID
            }
        })

        if(!ColaboradorFound){
            return new HttpException('Colaborador no encontrado', HttpStatus.NOT_FOUND)
        }

        const updateColaborador = Object.assign(ColaboradorFound, Colaborador);
        return this.ColaboradoresRepository.save(updateColaborador);
    }
}
