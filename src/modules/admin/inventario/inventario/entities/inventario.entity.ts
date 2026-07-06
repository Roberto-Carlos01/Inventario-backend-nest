import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Producto } from '../../producto/entities/producto.entity';
import { Almacen } from '../../almacen/entities/almacen.entity';

@Entity({ name: 'inventario' })
export class Inventario {
  @PrimaryGeneratedColumn()
  idinventario!: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  stock_actual?: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  stock_minimo?: number;

  @ManyToOne(() => Producto, (producto) => producto.inventarios)
  @JoinColumn({ name: 'idproducto' })
  producto!: Producto;

  @ManyToOne(() => Almacen, (almacen) => almacen.inventarios)
  @JoinColumn({ name: 'idalmacen' })
  almacen!: Almacen;
}
