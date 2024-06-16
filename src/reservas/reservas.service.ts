import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Reserva } from './reserva.entity';
import { Repository } from 'typeorm';
import { CreateReservaDTO } from './dto/reserva.dto';

@Injectable()
export class ReservasService {
    constructor(@InjectRepository(Reserva) private ReservasRepository: Repository<Reserva>){}
    
    async createReserva(Reserva: CreateReservaDTO){
        const ReservaFound = await this.ReservasRepository.findOne({
            where: {
                MesaID: Reserva.MesaID,
                Fecha_Reserva: Reserva.Fecha_Reserva,
                Hora_Reserva: Reserva.Hora_Reserva
            }
        })

        if(ReservaFound){
            return new HttpException('La Mesa ' + ReservaFound.MesaID + ' ya cuenta con una reserva para la fecha ' + ReservaFound.Fecha_Reserva + ' a las ' + ReservaFound.Hora_Reserva, HttpStatus.CONFLICT)
        }

        const newReserva = this.ReservasRepository.create(Reserva);
        return this.ReservasRepository.save(newReserva);
    }

    getReservas(){
        return this.ReservasRepository.find()
    }

    async getReserva(ReservaID: number){
        const ReservaFound = await this.ReservasRepository.findOne({
            where: {
                ReservaID
            }
        });

        if(!ReservaFound){
            return new HttpException('Reserva no encontrada', HttpStatus.NOT_FOUND);
        }

        return ReservaFound;
    }

    async deleteReserva(ReservaID: number){
        const ReservaFound = await this.ReservasRepository.findOne({
            where: {
                ReservaID
            }
        })

        if(!ReservaFound){
            return new HttpException('Reserva no encontrada', HttpStatus.NOT_FOUND)
        }
        return this.ReservasRepository.delete({ ReservaID });
    }

    async updateReserva(ReservaID: number, Reserva: CreateReservaDTO){
        const ReservaFound = await this.ReservasRepository.findOne({
            where: {
                ReservaID
            }
        })

        if(!ReservaFound){
            return new HttpException('Reserva no encontrado', HttpStatus.NOT_FOUND)
        }

        const updateReserva = Object.assign(ReservaFound, Reserva);
        return this.ReservasRepository.save(updateReserva);
    }
}
