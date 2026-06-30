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
      type: (process.env.DATABASE_TYPE as 'mysql') || 'mysql',
      host: process.env.DATABASE_HOST || '127.0.0.1',
      port: +(process.env.DATABASE_HOST || 3306),
      username: process.env.DATABASE_USER || 'root',
      password: process.env.DATABASE_PASSWORD || '123456',
      database: process.env.DATABASE_NAME || 'inventario-technology-store',
      entities: [__dirname + '/../**/*.entity{.ts, .js}'],
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
