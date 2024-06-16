import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mesa } from './mesa.entity';
import { Repository } from 'typeorm';
import { CreateMesaDTO } from './dto/mesa.dto';

@Injectable()
export class MesasService {
    constructor(@InjectRepository(Mesa) private MesasRepository: Repository<Mesa>){}
    
    async createMesa(Mesa: CreateMesaDTO){
        const MesaFound = await this.MesasRepository.findOne({
            where: {
                Descripcion: Mesa.Descripcion
            }
        })

        if(MesaFound){
            return new HttpException('La Mesa ' + MesaFound.Descripcion + ' ya se encuentra registrada', HttpStatus.CONFLICT)
        }

        const newMesa = this.MesasRepository.create(Mesa);
        return this.MesasRepository.save(newMesa);
    }

    getMesas(){
        return this.MesasRepository.find()
    }

    async getMesa(MesaID: number){
        const MesaFound = await this.MesasRepository.findOne({
            where: {
                MesaID
            }
        });

        if(!MesaFound){
            return new HttpException('Mesa no encontrada', HttpStatus.NOT_FOUND);
        }

        return MesaFound;
    }

    async deleteMesa(MesaID: number){
        const MesaFound = await this.MesasRepository.findOne({
            where: {
                MesaID
            }
        })

        if(!MesaFound){
            return new HttpException('Mesa no encontrada', HttpStatus.NOT_FOUND)
        }
        return this.MesasRepository.delete({ MesaID });
    }

    async updateMesa(MesaID: number, Mesa: CreateMesaDTO){
        const MesaFound = await this.MesasRepository.findOne({
            where: {
                MesaID
            }
        })

        if(!MesaFound){
            return new HttpException('Mesa no encontrado', HttpStatus.NOT_FOUND)
        }

        const updateMesa = Object.assign(MesaFound, Mesa);
        return this.MesasRepository.save(updateMesa);
    }
}
