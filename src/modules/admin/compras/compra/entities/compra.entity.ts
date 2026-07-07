import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Proveedor } from '../../proveedor/entities/proveedor.entity';
import { Almacen } from 'src/modules/admin/inventario/almacen/entities/almacen.entity';
import { Usuario } from 'src/modules/admin/administracion/usuario/entities/usuario.entity';
import { DetalleCompra } from '../../detalle_compra/entities/detalle_compra.entity';

@Entity({ name: 'compra' })
export class Compra {
  @PrimaryGeneratedColumn()
  idcompra!: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha!: Date;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: true })
  total?: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  numero_factura_recibido?: string;

  @ManyToOne(() => Proveedor, (proveedor) => proveedor.compras)
  @JoinColumn({ name: 'idproveedor' })
  proveedor?: Proveedor;

  @ManyToOne(() => Almacen, (almacen) => almacen.compras)
  @JoinColumn({ name: 'idalmacen' })
  almacen?: Almacen;

  @ManyToOne(() => Usuario, (usuario) => usuario.compras)
  @JoinColumn({ name: 'idusuario' })
  usuario?: Usuario;

  @OneToMany(() => DetalleCompra, (detalleCompra) => detalleCompra.compra)
  detallesCompra!: DetalleCompra;
}
