import { Module } from '@nestjs/common';
import { AlmacenModule } from './almacen/almacen.module';
import { ProductoModule } from './producto/producto.module';
import { InventarioModule } from './inventario/inventario.module';
import { MovimientoModule } from './movimiento/movimiento.module';
import { TrasladoModule } from './traslado/traslado.module';

@Module({
  imports: [
    AlmacenModule,
    ProductoModule,
    InventarioModule,
    MovimientoModule,
    TrasladoModule,
  ],
})
export class InventarioModuleM {}
