import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sede } from './sede.entity';
import { Repository } from 'typeorm';
import { CreateSedeDTO } from './dto/sede.dto';

@Injectable()
export class SedesService {
    constructor(@InjectRepository(Sede) private SedesRepository: Repository<Sede>){}
    
    async createSede(Sede: CreateSedeDTO){
        const SedeFound = await this.SedesRepository.findOne({
            where: {
                Descripcion: Sede.Descripcion
            }
        })

        if(SedeFound){
            return new HttpException('La Sede ' + SedeFound.Descripcion + ' ya se encuentra registrada', HttpStatus.CONFLICT)
        }

        const newSede = this.SedesRepository.create(Sede);
        return this.SedesRepository.save(newSede);
    }

    getSedes(){
        return this.SedesRepository.find()
    }

    async getSede(SedeID: number){
        const SedeFound = await this.SedesRepository.findOne({
            where: {
                SedeID
            }
        });

        if(!SedeFound){
            return new HttpException('Sede no encontrada', HttpStatus.NOT_FOUND);
        }

        return SedeFound;
    }

    async deleteSede(SedeID: number){
        const SedeFound = await this.SedesRepository.findOne({
            where: {
                SedeID
            }
        })

        if(!SedeFound){
            return new HttpException('Sede no encontrada', HttpStatus.NOT_FOUND)
        }
        return this.SedesRepository.delete({ SedeID });
    }

    async updateSede(SedeID: number, Sede: CreateSedeDTO){
        const SedeFound = await this.SedesRepository.findOne({
            where: {
                SedeID
            }
        })

        if(!SedeFound){
            return new HttpException('Sede no encontrado', HttpStatus.NOT_FOUND)
        }

        const updateSede = Object.assign(SedeFound, Sede);
        return this.SedesRepository.save(updateSede);
    }
}
