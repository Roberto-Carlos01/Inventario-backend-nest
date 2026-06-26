import { Module } from '@nestjs/common';
import { ClienteModule } from './cliente/cliente.module';
import { VentaModule } from './venta/venta.module';
import { DetalleVentaModule } from './detalle_venta/detalle_venta.module';
import { FacturaModule } from './factura/factura.module';

@Module({
  imports: [ClienteModule, VentaModule, DetalleVentaModule, FacturaModule]
})
export class VentasModule {}
