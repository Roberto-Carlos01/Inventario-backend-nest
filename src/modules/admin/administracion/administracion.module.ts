import { Module } from '@nestjs/common';
import { EmpleadoModule } from './empleado/empleado.module';
import { UsuarioModule } from './usuario/usuario.module';
import { RolModule } from './rol/rol.module';
import { PermisoModule } from './permiso/permiso.module';
import { SucursalModule } from './sucursal/sucursal.module';

@Module({
  imports: [EmpleadoModule, UsuarioModule, RolModule, PermisoModule, SucursalModule]
})
export class AdministracionModule {}
