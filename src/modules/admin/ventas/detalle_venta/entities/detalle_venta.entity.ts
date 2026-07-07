import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Venta } from '../../venta/entities/venta.entity';
import { Producto } from 'src/modules/admin/inventario/producto/entities/producto.entity';

@Entity({ name: 'detalle_venta' })
export class DetalleVenta {
  @PrimaryGeneratedColumn()
  id_detalle_venta!: number;

  @Column({ type: 'int' })
  cantidad!: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    nullable: true,
  })
  precio_unitario?: number;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
    nullable: true,
  })
  porcentaje_impuesto?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    nullable: true,
  })
  monto_impuesto?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    nullable: true,
  })
  subtotal?: number;

  @ManyToOne(() => Venta, (venta) => venta.detallesVenta)
  @JoinColumn({ name: 'idventa' })
  venta!: Venta;

  @ManyToOne(() => Producto, (producto) => producto.detallesVenta)
  @JoinColumn({ name: 'idproducto' })
  producto!: Producto;
}
