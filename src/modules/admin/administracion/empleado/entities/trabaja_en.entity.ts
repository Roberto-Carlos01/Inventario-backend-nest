import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Sucursal } from '../../sucursal/entities/sucursal.entity';
import { Empleado } from './empleado.entity';

@Entity()
export class TrabajaEn {
  @PrimaryColumn()
  idempleado!: number;
  @PrimaryColumn()
  idsucursal!: number;
  @ManyToOne(() => Sucursal, (sucursal) => sucursal.asignaciones)
  @JoinColumn({ name: 'idsucursal' })
  sucursal!: Sucursal;

  @ManyToOne(() => Empleado, (empleado) => empleado.asignaciones)
  @JoinColumn({ name: 'idempleado' })
  empleado!: Empleado;
}
