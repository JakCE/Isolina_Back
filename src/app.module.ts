import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ZonasModule } from './zonas/zonas.module';
import { SedesModule } from './sedes/sedes.module';
import { ReservasModule } from './reservas/reservas.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { MesasModule } from './mesas/mesas.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'jakadmindev',
      database: 'pruebadb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false
    }),
    UsuariosModule,
    AuthModule,
    ZonasModule,
    SedesModule,
    ReservasModule,
    PedidosModule,
    MesasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
