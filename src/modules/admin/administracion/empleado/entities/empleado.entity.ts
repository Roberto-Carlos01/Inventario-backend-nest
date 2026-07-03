import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { TrabajaEn } from './trabaja_en.entity';

@Entity({ name: 'empleado' })
export class Empleado {
  @PrimaryGeneratedColumn()
  idempleado!: number;

  @Column({ type: 'varchar', length: 150, nullable: false })
  nombreCompleto!: string;

  @Column({ type: 'varchar', length: 30, unique: true })
  ci?: string;

  @Column({ type: 'varchar', length: 30 })
  telefono?: string;

  @Column({ type: 'varchar', length: 255 })
  direccion?: string;

  @Column({ type: 'date' })
  fecha_nac?: Date;

  @Column({ type: 'date' })
  fechaIngreso?: Date;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  salarioBase?: number;

  @Column({ default: true })
  estado!: boolean;

  //relacion 1:1 con usuario (un empleado tiene un usuario)
  @OneToOne(() => Usuario)
  @JoinColumn({ name: 'idusuario' })
  usuario?: Usuario;

  // relacion , 1 empleado trabaja en muchas sucursales
  @OneToMany(() => TrabajaEn, (trabajo) => trabajo.empleado)
  asignaciones?: TrabajaEn[];
}
