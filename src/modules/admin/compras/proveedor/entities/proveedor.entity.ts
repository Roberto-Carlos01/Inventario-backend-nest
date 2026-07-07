import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'proveedor' })
export class Proveedor {
  @PrimaryGeneratedColumn()
  idproveedor!: number;

  @Column({ type: 'varchar', length: 150 })
  razonsocial!: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  telefono?: string;

  @Column({ type: 'varchar', length: 150, nullable: true })
  email?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  nit_ci?: string;

  @Column({ type: 'text', nullable: true })
  descripcion?: string;
}
