import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePermisoDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre del permiso no puede estar vacio' })
  accion!: string;
  @IsString()
  @IsNotEmpty({ message: 'El subject no puede estar vacio' })
  subject!: string;
  @IsOptional()
  @IsString({ message: 'El detalle debe ser una cadena de texto' })
  detalle?: string;
}
