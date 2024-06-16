import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cargo } from './cargo.entity';
import { Repository } from 'typeorm';
import { CreateCargoDTO } from './dto/cargo.dto';

@Injectable()
export class CargosService {
    constructor(@InjectRepository(Cargo) private CargosRepository: Repository<Cargo>){}
    
    async createCargo(Cargo: CreateCargoDTO){
        const CargoFound = await this.CargosRepository.findOne({
            where: {
                Descripcion: Cargo.Descripcion
            }
        })

        if(CargoFound){
            return new HttpException('El Cargo ' + CargoFound.Descripcion + ' ya se encuentra registrada', HttpStatus.CONFLICT)
        }

        const newCargo = this.CargosRepository.create(Cargo);
        return this.CargosRepository.save(newCargo);
    }

    getCargos(){
        return this.CargosRepository.find()
    }

    async getCargo(CargoID: number){
        const CargoFound = await this.CargosRepository.findOne({
            where: {
                CargoID
            }
        });

        if(!CargoFound){
            return new HttpException('Cargo no encontrada', HttpStatus.NOT_FOUND);
        }

        return CargoFound;
    }

    async deleteCargo(CargoID: number){
        const CargoFound = await this.CargosRepository.findOne({
            where: {
                CargoID
            }
        })

        if(!CargoFound){
            return new HttpException('Cargo no encontrada', HttpStatus.NOT_FOUND)
        }
        return this.CargosRepository.delete({ CargoID });
    }

    async updateCargo(CargoID: number, Cargo: CreateCargoDTO){
        const CargoFound = await this.CargosRepository.findOne({
            where: {
                CargoID
            }
        })

        if(!CargoFound){
            return new HttpException('Cargo no encontrado', HttpStatus.NOT_FOUND)
        }

        const updateCargo = Object.assign(CargoFound, Cargo);
        return this.CargosRepository.save(updateCargo);
    }
}
