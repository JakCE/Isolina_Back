import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Zona } from './zona.entity';
import { Repository } from 'typeorm';
import { CreateZonaDTO } from './dto/create-zona.dto';

@Injectable()
export class ZonasService {
    constructor(@InjectRepository(Zona) private zonasRepository: Repository<Zona>){}
    
    async createZona(zona: CreateZonaDTO){
        const zonaFound = await this.zonasRepository.findOne({
            where: {
                Descripcion: zona.Descripcion
            }
        })

        if(zonaFound){
            return new HttpException('La zona ' + zonaFound.Descripcion + ' ya se encuentra registrada', HttpStatus.CONFLICT)
        }

        const newZona = this.zonasRepository.create(zona);
        return this.zonasRepository.save(newZona);
    }

    getZonas(){
        return this.zonasRepository.find()
    }

    async getZona(ZonaID: number){
        const zonaFound = await this.zonasRepository.findOne({
            where: {
                ZonaID
            }
        });

        if(!zonaFound){
            return new HttpException('Zona no encontrada', HttpStatus.NOT_FOUND);
        }

        return zonaFound;
    }

    async deleteZona(ZonaID: number){
        const zonaFound = await this.zonasRepository.findOne({
            where: {
                ZonaID
            }
        })

        if(!zonaFound){
            return new HttpException('Zona no encontrada', HttpStatus.NOT_FOUND)
        }
        return this.zonasRepository.delete({ ZonaID });
    }

    async updateZona(ZonaID: number, zona: CreateZonaDTO){
        const zonaFound = await this.zonasRepository.findOne({
            where: {
                ZonaID
            }
        })

        if(!zonaFound){
            return new HttpException('Zona no encontrado', HttpStatus.NOT_FOUND)
        }

        const updateZona = Object.assign(zonaFound, zona);
        return this.zonasRepository.save(updateZona);
    }
}
