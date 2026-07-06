import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class CreateAlmacenDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 100)
  nombre!: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;

  @IsInt()
  @Min(1)
  idsucursal!: number;
}
