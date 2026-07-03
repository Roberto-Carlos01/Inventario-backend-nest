import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RolTienePermiso } from '../../rol/entities/rol_tiene_permiso.entity';

@Entity({ name: 'permiso' })
export class Permiso {
  @PrimaryGeneratedColumn()
  idpermiso!: number;
  @Column({ type: 'varchar', length: 100, nullable: false })
  accion!: string;
  @Column({ type: 'varchar', length: 100, nullable: false })
  subject!: string;
  @Column({ type: 'text', nullable: true })
  detalle?: string;

  @OneToMany(
    () => RolTienePermiso,
    (rolTienePermiso) => rolTienePermiso.permiso,
  )
  roles?: RolTienePermiso[];
}
