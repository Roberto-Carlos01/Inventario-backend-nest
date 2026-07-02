export class CreateRolDto {
  idrol!: number;
  nombre!: string;
  descripcion?: string;
  activo?: boolean;
  created_at?: Date;
  updated_at?: Date;
}
