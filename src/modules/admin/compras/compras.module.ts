import { Module } from '@nestjs/common';
import { ProveedorModule } from './proveedor/proveedor.module';
import { CompraModule } from './compra/compra.module';
import { DetalleCompraModule } from './detalle_compra/detalle_compra.module';

@Module({
  imports: [ProveedorModule, CompraModule, DetalleCompraModule]
})
export class ComprasModule {}
