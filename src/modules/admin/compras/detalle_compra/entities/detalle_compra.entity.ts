import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Producto } from 'src/modules/admin/inventario/producto/entities/producto.entity';
import { Compra } from '../../compra/entities/compra.entity';

@Entity({ name: 'detalle_compra' })
export class DetalleCompra {
  @PrimaryGeneratedColumn()
  id_detalle_compra!: number;

  @Column({ type: 'int' })
  cantidad!: number;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  precio_unitario?: number;

  @ManyToOne(() => Compra, (compra) => compra.detallesCompra)
  @JoinColumn({ name: 'idcompra' })
  compra!: Compra;

  @ManyToOne(() => Producto, (producto) => producto.detallesCompra)
  @JoinColumn({ name: 'idproducto' })
  producto!: Producto;
  
}
