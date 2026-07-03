import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateMarcaDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 100, { message: 'El nombre debe tener entre 3 y 100 caracteres' })
  nombre!: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  @Length(3, 100, { message: 'El pais debe tener entre 3 y 100 caracteres' })
  pais?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
