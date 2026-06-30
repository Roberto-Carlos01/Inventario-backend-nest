import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AdministracionModule } from './modules/admin/administracion/administracion.module';
import { CatalogosModule } from './modules/admin/catalogos/catalogos.module';
import { InventarioModuleM } from './modules/admin/inventario/inventario.module';
import { VentasModule } from './modules/admin/ventas/ventas.module';
import { ComprasModule } from './modules/admin/compras/compras.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'inventario-technology-store',
      entities: ['src/**/*.entity.ts'],
      synchronize: false,
    }),
    ConfigModule.forRoot({
      envFilePath: ['.development.env', '.production.env'],
    }),
    InventarioModuleM,
    AdministracionModule,
    CatalogosModule,
    VentasModule,
    ComprasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
