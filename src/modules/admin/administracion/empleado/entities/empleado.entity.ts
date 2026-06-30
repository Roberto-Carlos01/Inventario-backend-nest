import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
