import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DetallePedido } from './detalle-pedido.entity';
import { Repository } from 'typeorm';
import { CreateDetallePedidoDTO } from './dto/detalle-pedido.dto';

@Injectable()
export class DetallePedidosService {
    constructor(@InjectRepository(DetallePedido) private DetallePedidosRepository: Repository<DetallePedido>){}
    
    async createDetallePedido(DetallePedido: CreateDetallePedidoDTO){
        /*const DetallePedidoFound = await this.DetallePedidosRepository.findOne({
            where: {
                Descripcion: DetallePedido.Descripcion
            }
        })

        if(DetallePedidoFound){
            return new HttpException('La DetallePedido ' + DetallePedidoFound.Descripcion + ' ya se encuentra registrada', HttpStatus.CONFLICT)
        }*/

        const newDetallePedido = this.DetallePedidosRepository.create(DetallePedido);
        return this.DetallePedidosRepository.save(newDetallePedido);
    }

    getDetallePedidos(){
        return this.DetallePedidosRepository.find()
    }

    async getDetallePedido(DetallePedidoID: number){
        const DetallePedidoFound = await this.DetallePedidosRepository.findOne({
            where: {
                DetallePedidoID
            }
        });

        if(!DetallePedidoFound){
            return new HttpException('DetallePedido no encontrada', HttpStatus.NOT_FOUND);
        }

        return DetallePedidoFound;
    }

    async deleteDetallePedido(DetallePedidoID: number){
        const DetallePedidoFound = await this.DetallePedidosRepository.findOne({
            where: {
                DetallePedidoID
            }
        })

        if(!DetallePedidoFound){
            return new HttpException('DetallePedido no encontrada', HttpStatus.NOT_FOUND)
        }
        return this.DetallePedidosRepository.delete({ DetallePedidoID });
    }

    async updateDetallePedido(DetallePedidoID: number, DetallePedido: CreateDetallePedidoDTO){
        const DetallePedidoFound = await this.DetallePedidosRepository.findOne({
            where: {
                DetallePedidoID
            }
        })

        if(!DetallePedidoFound){
            return new HttpException('DetallePedido no encontrado', HttpStatus.NOT_FOUND)
        }

        const updateDetallePedido = Object.assign(DetallePedidoFound, DetallePedido);
        return this.DetallePedidosRepository.save(updateDetallePedido);
    }
}
