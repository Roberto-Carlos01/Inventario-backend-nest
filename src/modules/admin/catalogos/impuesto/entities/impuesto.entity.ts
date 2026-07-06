import { Producto } from 'src/modules/admin/inventario/producto/entities/producto.entity';
import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Entity } from 'typeorm';

@Entity({ name: 'impuesto' })
export class Impuesto {
  @PrimaryGeneratedColumn()
  idimpuesto!: number;

  @Column({ type: 'varchar', length: 100 })
  nombre!: string;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  porcentaje!: number;

  @Column({ type: 'boolean', default: true, nullable: true })
  activo?: boolean;

  @OneToMany(() => Producto, (producto) => producto.impuesto)
  productos?: Producto[];
}
