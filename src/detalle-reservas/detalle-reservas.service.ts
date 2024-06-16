import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DetalleReserva } from './detalle-reserva.entity';
import { Repository } from 'typeorm';
import { CreateDetalleReservaDTO } from './dto/detalle-reserva.dto';

@Injectable()
export class DetalleReservasService {
    constructor(@InjectRepository(DetalleReserva) private DetalleReservasRepository: Repository<DetalleReserva>){}
    
    async createDetalleReserva(DetalleReserva: CreateDetalleReservaDTO){
        /*const DetalleReservaFound = await this.DetalleReservasRepository.findOne({
            where: {
                Descripcion: DetalleReserva.Descripcion
            }
        })

        if(DetalleReservaFound){
            return new HttpException('La DetalleReserva ' + DetalleReservaFound.Descripcion + ' ya se encuentra registrada', HttpStatus.CONFLICT)
        }*/

        const newDetalleReserva = this.DetalleReservasRepository.create(DetalleReserva);
        return this.DetalleReservasRepository.save(newDetalleReserva);
    }

    getDetalleReservas(){
        return this.DetalleReservasRepository.find()
    }

    async getDetalleReserva(DetalleReservaID: number){
        const DetalleReservaFound = await this.DetalleReservasRepository.findOne({
            where: {
                DetalleReservaID
            }
        });

        if(!DetalleReservaFound){
            return new HttpException('DetalleReserva no encontrada', HttpStatus.NOT_FOUND);
        }

        return DetalleReservaFound;
    }

    async deleteDetalleReserva(DetalleReservaID: number){
        const DetalleReservaFound = await this.DetalleReservasRepository.findOne({
            where: {
                DetalleReservaID
            }
        })

        if(!DetalleReservaFound){
            return new HttpException('DetalleReserva no encontrada', HttpStatus.NOT_FOUND)
        }
        return this.DetalleReservasRepository.delete({ DetalleReservaID });
    }

    async updateDetalleReserva(DetalleReservaID: number, DetalleReserva: CreateDetalleReservaDTO){
        const DetalleReservaFound = await this.DetalleReservasRepository.findOne({
            where: {
                DetalleReservaID
            }
        })

        if(!DetalleReservaFound){
            return new HttpException('DetalleReserva no encontrado', HttpStatus.NOT_FOUND)
        }

        const updateDetalleReserva = Object.assign(DetalleReservaFound, DetalleReserva);
        return this.DetalleReservasRepository.save(updateDetalleReserva);
    }
}
