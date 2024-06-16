import { Module } from '@nestjs/common';
import { MesasController } from './mesas.controller';
import { MesasService } from './mesas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mesa } from './mesa.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mesa])],
  controllers: [MesasController],
  providers: [MesasService]
})
export class MesasModule {}
