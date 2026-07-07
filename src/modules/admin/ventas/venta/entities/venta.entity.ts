import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Factura } from '../../factura/entities/factura.entity';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { Usuario } from 'src/modules/admin/administracion/usuario/entities/usuario.entity';
import { DetalleVenta } from '../../detalle_venta/entities/detalle_venta.entity';

@Entity({ name: 'venta' })
export class Venta {
  @PrimaryGeneratedColumn()
  idventa!: number;

  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  fecha!: Date;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    nullable: true,
  })
  subtotal_neto?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    nullable: true,
  })
  total_impuestos?: number;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    nullable: true,
  })
  total_final?: number;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  metodoPago?: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  estado?: string;

  @OneToOne(() => Factura, (factura) => factura.venta)
  @JoinColumn({ name: 'idfactura' })
  factura?: Factura;

  @ManyToOne(() => Cliente, (cliente) => cliente.ventas)
  @JoinColumn({ name: 'idcliente' })
  cliente?: Cliente;

  @ManyToOne(() => Usuario, (usuario) => usuario.ventas)
  @JoinColumn({ name: 'idusuario' })
  usuario?: Usuario;

  @OneToMany(() => DetalleVenta, (detalle) => detalle.venta)
  detallesVenta?: DetalleVenta[];
}
