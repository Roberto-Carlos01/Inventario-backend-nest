import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioAsignaRol } from './usuario_asigna_rol.entity';
import { Movimiento } from 'src/modules/admin/inventario/movimiento/entities/movimiento.entity';
import { Traslado } from 'src/modules/admin/inventario/traslado/entities/traslado.entity';
import { Compra } from 'src/modules/admin/compras/compra/entities/compra.entity';
import { Venta } from 'src/modules/admin/ventas/venta/entities/venta.entity';

@Entity({ name: 'usuario' })
export class Usuario {
  @PrimaryGeneratedColumn()
  idusuario!: number;

  @Column({ type: 'varchar', length: 100, nullable: false, unique: true })
  nombreUsuario!: string;

  @Column({ type: 'varchar', length: 255, nullable: false, select: false })
  password!: string;

  @Column({ type: 'varchar', length: 150, unique: true, nullable: true })
  email?: string;

  @Column({ type: 'boolean', default: true })
  activo?: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  foto_perfil?: string;

  @OneToMany(
    () => UsuarioAsignaRol,
    (usuarioAsignaRol) => usuarioAsignaRol.usuario,
  )
  asignacionesRoles?: UsuarioAsignaRol[];

  @OneToMany(() => Movimiento, (movimiento) => movimiento.usuario)
  movimientos?: Movimiento[];

  @OneToMany(() => Traslado, (traslado) => traslado.usuario)
  traslados?: Traslado[];

  @OneToMany(() => Compra, (compra) => compra.usuario)
  compras?: Compra[];

  @OneToMany(() => Venta, (venta) => venta.usuario)
  ventas?: Venta[];
}
