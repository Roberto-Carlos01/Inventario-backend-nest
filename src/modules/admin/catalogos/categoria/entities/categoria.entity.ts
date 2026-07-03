import { Producto } from 'src/modules/admin/inventario/producto/entities/producto.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categoria' })
export class Categoria {
  @PrimaryGeneratedColumn()
  idcategoria!: number;

  @Column({ type: 'varchar', length: 100 })
  nombre!: string;

  @Column({ type: 'text', nullable: true })
  descripcion?: string;

  @Column({ type: 'boolean', default: true, nullable: true })
  activo?: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  imagen?: string;

  @OneToMany(() => Producto, (producto) => producto.categoria)
  productos?: Producto[];
}
