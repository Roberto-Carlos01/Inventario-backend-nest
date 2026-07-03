import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateProductoDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 150)
  nombre!: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  codigo_barras?: string;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  precio_venta!: number;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  imagen?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  idimpuesto?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  idmarca?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  idcategoria?: number;
}
