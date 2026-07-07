import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EstadoFactura } from '../enum/estadoFactura';

@Entity({ name: 'factura' })
export class Factura {
  @PrimaryGeneratedColumn()
  idfactura!: number;
  @Column({ type: 'varchar', length: 50, nullable: true })
  numeroFactura?: string;

  @Column({ type: 'datetime', nullable: true })
  fechaemision?: Date;

  @Column({ type: 'varchar', length: 100, nullable: true })
  codigoControl?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  estado?: EstadoFactura;

  @Column({ type: 'varchar', length: 255, nullable: true })
  cuf?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  cufd?: string;
}
