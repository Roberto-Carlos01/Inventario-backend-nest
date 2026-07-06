import { Usuario } from 'src/modules/admin/administracion/usuario/entities/usuario.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Inventario } from '../../inventario/entities/inventario.entity';
import { TipoMovimiento } from '../enum/type';

@Entity({ name: 'movimiento_inventario' })
export class Movimiento {
  @PrimaryGeneratedColumn()
  idmovimiento!: number;

  @Column({ type: 'varchar', length: 25 })
  tipo!: TipoMovimiento;

  @Column({ type: 'int' })
  cantidad!: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha!: Date;

  @Column({ type: 'varchar', length: 255, nullable: true })
  referencia?: string;

  @Column({ type: 'int', nullable: true })
  stock_restante?: number;

  @Column({ type: 'text', nullable: true })
  observaciones?: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.movimientos)
  @JoinColumn({ name: 'idusuario' })
  usuario!: Usuario;

  @ManyToOne(() => Inventario, (inventario) => inventario.movimientos)
  @JoinColumn({ name: 'idinventario' })
  inventario!: Inventario;
}
