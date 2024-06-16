import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './pedido.entity';
import { Repository } from 'typeorm';
import { CreatePedidoDTO } from './dto/pedido.dto';

@Injectable()
export class PedidosService {
    constructor(@InjectRepository(Pedido) private PedidosRepository: Repository<Pedido>){}
    
    async createPedido(Pedido: CreatePedidoDTO){
        const PedidoFound = await this.PedidosRepository.findOne({
            where: {
                MesaID: Pedido.MesaID,
                UsuarioID: Pedido.UsuarioID,
                SedeID: Pedido.SedeID,
                Fecha: Pedido.Fecha,
                Hora: Pedido.Hora
            }
        })

        if(PedidoFound){
            return new HttpException('La Pedido de la mesa' + PedidoFound.MesaID + ' ya se encuentra registrada', HttpStatus.CONFLICT)
        }

        const newPedido = this.PedidosRepository.create(Pedido);
        return this.PedidosRepository.save(newPedido);
    }

    getPedidos(){
        return this.PedidosRepository.find()
    }

    async getPedido(PedidoID: number){
        const PedidoFound = await this.PedidosRepository.findOne({
            where: {
                PedidoID
            }
        });

        if(!PedidoFound){
            return new HttpException('Pedido no encontrada', HttpStatus.NOT_FOUND);
        }

        return PedidoFound;
    }

    async deletePedido(PedidoID: number){
        const PedidoFound = await this.PedidosRepository.findOne({
            where: {
                PedidoID
            }
        })

        if(!PedidoFound){
            return new HttpException('Pedido no encontrada', HttpStatus.NOT_FOUND)
        }
        return this.PedidosRepository.delete({ PedidoID });
    }

    async updatePedido(PedidoID: number, Pedido: CreatePedidoDTO){
        const PedidoFound = await this.PedidosRepository.findOne({
            where: {
                PedidoID
            }
        })

        if(!PedidoFound){
            return new HttpException('Pedido no encontrado', HttpStatus.NOT_FOUND)
        }

        const updatePedido = Object.assign(PedidoFound, Pedido);
        return this.PedidosRepository.save(updatePedido);
    }
}
