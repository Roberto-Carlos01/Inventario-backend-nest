import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TrabajaEn } from '../../empleado/entities/trabaja_en.entity';

@Entity({ name: 'sucursal' })
export class Sucursal {
  @PrimaryGeneratedColumn()
  idsucursal!: number;
  @Column({ type: 'varchar', length: 150, nullable: false })
  nombre!: string;
  @Column({ type: 'boolean', default: true })
  estado?: boolean;
  @Column({ type: 'varchar', length: 100, nullable: true })
  ciudad?: string;
  @Column({ type: 'varchar', length: 255, nullable: true })
  direccion?: string;
  @Column({ type: 'varchar', length: 30, nullable: true })
  telefono?: string;

  @OneToMany(() => TrabajaEn, (trabajaEn) => trabajaEn.sucursal)
  asignaciones?: TrabajaEn[];
}
