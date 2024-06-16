import { Module } from '@nestjs/common';
import { DetalleReservasController } from './detalle-reservas.controller';
import { DetalleReservasService } from './detalle-reservas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetalleReserva } from './detalle-reserva.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DetalleReserva])],
  controllers: [DetalleReservasController],
  providers: [DetalleReservasService]
})
export class DetalleReservasModule {}
