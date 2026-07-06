import { Usuario } from 'src/modules/admin/administracion/usuario/entities/usuario.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Almacen } from '../../almacen/entities/almacen.entity';
import { EstadoTraslado } from '../enum/estado';

@Entity({ name: 'traslado' })
export class Traslado {
  @PrimaryGeneratedColumn()
  idtraslado!: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha!: Date;

  @Column({ type: 'varchar', length: 50, nullable: true })
  estado?: EstadoTraslado;

  @Column({ type: 'text', nullable: true })
  observaciones?: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.traslados)
  @JoinColumn({ name: 'idusuario' })
  usuario!: Usuario;

  @ManyToOne(() => Almacen, (almacen) => almacen.trasladosEnviados)
  @JoinColumn({ name: 'idalmacen_envia' })
  almacenEnvia!: Almacen;

  @ManyToOne(() => Almacen, (almacen) => almacen.trasladosRecibidos)
  @JoinColumn({ name: 'idalmacen_recibe' })
  almacenRecibe!: Almacen;
}
