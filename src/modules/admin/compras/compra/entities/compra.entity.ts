import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'compra' })
export class Compra {
  @PrimaryGeneratedColumn()
  idcompra!: number;

  @Column({ type: 'datetime', default: 'CURRENT_TIMESTAMP' })
  fecha!: Date;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  total?: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  numero_factura_recibido?: string;
}
