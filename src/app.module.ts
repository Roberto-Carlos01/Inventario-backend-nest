import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { RolModule } from './modules/admin/rol/rol.module';
import { PermissionsModule } from './modules/admin/permissions/permissions.module';
import { InventarioModule } from './modules/admin/inventario/inventario.module';
import { NotaModule } from './modules/admin/nota/nota.module';
import { ClienteProveedorModule } from './modules/admin/cliente-proveedor/cliente-proveedor.module';
import { UserModule } from './modules/admin/user/user.module';
import { AdministracionModule } from './modules/admin/administracion/administracion.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.development.env', '.production.env'],
    }),
    RolModule,
    PermissionsModule,
    InventarioModule,
    NotaModule,
    ClienteProveedorModule,
    UserModule,
    AdministracionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
