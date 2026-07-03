import { Sucursal } from 'src/modules/admin/administracion/sucursal/entities/sucursal.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
}
