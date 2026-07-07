import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Venta } from '../../venta/entities/venta.entity';

@Entity({ name: 'cliente' })
export class Cliente {
  @PrimaryGeneratedColumn()
  idcliente!: number;

  @Column({ type: 'varchar', length: 150, nullable: true })
  razon_social?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  ci_nit?: string;

  @OneToMany(() => Venta, (venta) => venta.cliente)
  ventas?: Venta[];
}
