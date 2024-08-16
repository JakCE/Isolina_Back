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
import { DetalleReservasModule } from './detalle-reservas/detalle-reservas.module';
import { DetallePedidosModule } from './detalle-pedidos/detalle-pedidos.module';
import { ColaboradoresModule } from './colaboradores/colaboradores.module';
import { CartaModule } from './carta/carta.module';
import { CargosModule } from './cargos/cargos.module';

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
    MesasModule,
    DetalleReservasModule,
    DetallePedidosModule,
    ColaboradoresModule,
    CartaModule,
    CargosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
/*
      type: 'mysql',
      host: 'rypc-azure-mysql.mysql.database.azure.com',
      port: 3306,
      username: 'adminrypc',
      password: 'RyPCazuredatabase1',
      database: 'isolinadb',

TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'jakadmindev',
      database: 'pruebadb',
      synchronize: false
    }),

*/
export class AppModule {}
