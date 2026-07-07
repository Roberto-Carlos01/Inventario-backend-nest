import { Sucursal } from 'src/modules/admin/administracion/sucursal/entities/sucursal.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Inventario } from '../../inventario/entities/inventario.entity';
import { Traslado } from '../../traslado/entities/traslado.entity';
import { Compra } from 'src/modules/admin/compras/compra/entities/compra.entity';

@Entity({ name: 'almacen' })
export class Almacen {
  @PrimaryGeneratedColumn()
  idalmacen!: number;

  @Column({ type: 'varchar', length: 100 })
  nombre!: string;

  @Column({ type: 'text', nullable: true })
  descripcion?: string;

  @Column({ type: 'boolean', default: true, nullable: true })
  activo?: boolean;

  @ManyToOne(() => Sucursal, (sucursal) => sucursal.almacenes)
  @JoinColumn({ name: 'idsucursal' })
  sucursal!: Sucursal;

  @OneToMany(() => Inventario, (inventario) => inventario.almacen)
  inventarios?: Inventario[];

  @OneToMany(() => Traslado, (traslado) => traslado.almacenEnvia)
  trasladosEnviados?: Traslado[];

  @OneToMany(() => Traslado, (traslado) => traslado.almacenRecibe)
  trasladosRecibidos?: Traslado[];

  @OneToMany(() => Compra, (compra) => compra.almacen)
  compras?: Compra[];
}
