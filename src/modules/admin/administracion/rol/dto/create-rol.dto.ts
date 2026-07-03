import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateRolDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 100, {
    message: 'El nombre del rol debe tener entre 3 y 100 caracteres',
  })
  nombre!: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
