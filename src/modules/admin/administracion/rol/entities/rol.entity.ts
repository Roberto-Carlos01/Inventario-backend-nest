import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RolTienePermiso } from './rol_tiene_permiso.entity';

@Entity({ name: 'rol' })
export class Rol {
  @PrimaryGeneratedColumn()
  idrol!: number;
  @Column({ type: 'varchar', length: 100, unique: true })
  nombre!: string;
  @Column({ type: 'text', nullable: true })
  descripcion?: string;
  @Column({ type: 'boolean', default: true })
  activo?: boolean;
  @CreateDateColumn()
  created_at?: Date;
  @CreateDateColumn()
  updated_at?: Date;

  @OneToMany(() => RolTienePermiso, (rolTienePermiso) => rolTienePermiso.rol)
  permisos?: RolTienePermiso[];
}
