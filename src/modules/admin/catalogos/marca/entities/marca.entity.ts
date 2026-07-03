import { Producto } from 'src/modules/admin/inventario/producto/entities/producto.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'marca' })
export class Marca {
  @PrimaryGeneratedColumn()
  idmarca!: number;

  @Column({ type: 'varchar', length: 100 })
  nombre!: string;

  @Column({ type: 'text', nullable: true })
  descripcion?: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  pais?: string;

  @Column({ type: 'boolean', nullable: true, default: true })
  activo?: boolean;

  @OneToMany(() => Producto, (producto) => producto.marca)
  productos?: Producto[];
}
