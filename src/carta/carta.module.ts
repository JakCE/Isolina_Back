import { Module } from '@nestjs/common';
import { CartaController } from './carta.controller';
import { CartaService } from './carta.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Carta } from './carta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Carta])],
  controllers: [CartaController],
  providers: [CartaService]
})
export class CartaModule {}
