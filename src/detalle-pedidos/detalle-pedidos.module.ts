import { Module } from '@nestjs/common';
import { DetallePedidosController } from './detalle-pedidos.controller';
import { DetallePedidosService } from './detalle-pedidos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetallePedido } from './detalle-pedido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DetallePedido])],
  controllers: [DetallePedidosController],
  providers: [DetallePedidosService]
})
export class DetallePedidosModule {}
