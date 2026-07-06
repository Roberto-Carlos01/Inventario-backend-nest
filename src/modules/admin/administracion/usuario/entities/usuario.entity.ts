import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioAsignaRol } from './usuario_asigna_rol.entity';
import { Movimiento } from 'src/modules/admin/inventario/movimiento/entities/movimiento.entity';

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
}
