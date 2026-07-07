import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cliente' })
export class Cliente {
  @PrimaryGeneratedColumn()
  idcliente!: number;

  @Column({ type: 'varchar', length: 150, nullable: true })
  razon_social?: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  ci_nit?: string;
}
