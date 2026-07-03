import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Rol } from '../../rol/entities/rol.entity';

@Entity({ name: 'usuario_asigna_rol' })
export class UsuarioAsignaRol {
  @PrimaryColumn()
  idusuario!: number;

  @PrimaryColumn()
  idrol!: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.asignacionesRoles)
  @JoinColumn({ name: 'idusuario' })
  usuario!: Usuario;

  @ManyToOne(() => Rol, (rol) => rol.asignacionesUsuarios)
  @JoinColumn({ name: 'idrol' })
  rol!: Rol;
}
