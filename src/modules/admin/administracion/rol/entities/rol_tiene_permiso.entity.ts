import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Rol } from './rol.entity';
import { Permiso } from '../../permiso/entities/permiso.entity';

@Entity({ name: 'rol_tiene_permiso' })
export class RolTienePermiso {
  @PrimaryColumn()
  idrol!: number;
  @PrimaryColumn()
  idpermiso!: number;

  @ManyToOne(() => Rol, (rol) => rol.permisos)
  @JoinColumn({ name: 'idrol' })
  rol!: Rol;

  @ManyToOne(() => Permiso, (permiso) => permiso.roles)
  @JoinColumn({ name: 'idpermiso' })
  permiso!: Permiso;
}
