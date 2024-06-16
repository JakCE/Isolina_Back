import { Module } from '@nestjs/common';
import { CargosController } from './cargos.controller';
import { CargosService } from './cargos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cargo } from './cargo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cargo])],
  controllers: [CargosController],
  providers: [CargosService]
})
export class CargosModule {}
