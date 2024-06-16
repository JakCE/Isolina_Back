import { Module } from '@nestjs/common';
import { ZonasController } from './zonas.controller';
import { ZonasService } from './zonas.service';
import { Zona } from './zona.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Zona])],
  controllers: [ZonasController],
  providers: [ZonasService]
})
export class ZonasModule {}
