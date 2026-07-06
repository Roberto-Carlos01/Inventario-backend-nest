import { Categoria } from 'src/modules/admin/catalogos/categoria/entities/categoria.entity';
import { Impuesto } from 'src/modules/admin/catalogos/impuesto/entities/impuesto.entity';
import { Marca } from 'src/modules/admin/catalogos/marca/entities/marca.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Inventario } from '../../inventario/entities/inventario.entity';

@Entity({ name: 'producto' })
export class Producto {
  @PrimaryGeneratedColumn()
  idproducto!: number;

  @Column({ type: 'varchar', length: 100 })
  nombre!: string;

  @Column({ type: 'varchar', length: 100, nullable: true, unique: true })
  codigo_barras?: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  precio_venta!: number;

  @Column({ type: 'text', nullable: true })
  descripcion?: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  imagen?: string;

  @ManyToOne(() => Impuesto, (impuesto) => impuesto.productos)
  @JoinColumn({ name: 'idimpuesto' })
  impuesto?: Impuesto;

  @ManyToOne(() => Marca, (marca) => marca.productos)
  @JoinColumn({ name: 'idmarca' })
  marca?: Marca;

  @ManyToOne(() => Categoria, (categoria) => categoria.productos)
  @JoinColumn({ name: 'idcategoria' })
  categoria?: Categoria;

  @OneToMany(() => Inventario, (inventario) => inventario.producto)
  inventarios?: Inventario[];
}
