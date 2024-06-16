import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Carta } from './carta.entity';
import { Repository } from 'typeorm';
import { CreateCartaDTO } from './dto/carta.dto';

@Injectable()
export class CartaService {
    constructor(@InjectRepository(Carta) private CartaRepository: Repository<Carta>){}
    
    async createCarta(Carta: CreateCartaDTO){
        const CartaFound = await this.CartaRepository.findOne({
            where: {
                Titulo: Carta.Titulo
            }
        })

        if(CartaFound){
            return new HttpException('La Carta ' + CartaFound.Descripcion + ' ya se encuentra registrada', HttpStatus.CONFLICT)
        }

        const newCarta = this.CartaRepository.create(Carta);
        return this.CartaRepository.save(newCarta);
    }

    getCartas(){
        return this.CartaRepository.find()
    }

    async getCarta(CartaID: number){
        const CartaFound = await this.CartaRepository.findOne({
            where: {
                CartaID
            }
        });

        if(!CartaFound){
            return new HttpException('Carta no encontrada', HttpStatus.NOT_FOUND);
        }

        return CartaFound;
    }

    async deleteCarta(CartaID: number){
        const CartaFound = await this.CartaRepository.findOne({
            where: {
                CartaID
            }
        })

        if(!CartaFound){
            return new HttpException('Carta no encontrada', HttpStatus.NOT_FOUND)
        }
        return this.CartaRepository.delete({ CartaID });
    }

    async updateCarta(CartaID: number, Carta: CreateCartaDTO){
        const CartaFound = await this.CartaRepository.findOne({
            where: {
                CartaID
            }
        })

        if(!CartaFound){
            return new HttpException('Carta no encontrado', HttpStatus.NOT_FOUND)
        }

        const updateCarta = Object.assign(CartaFound, Carta);
        return this.CartaRepository.save(updateCarta);
    }
}
