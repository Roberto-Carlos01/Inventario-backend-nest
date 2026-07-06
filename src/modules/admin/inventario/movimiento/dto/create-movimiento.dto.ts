import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class CreateMovimientoDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 25)
  tipo!: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  cantidad!: number;

  @IsOptional()
  @IsString()
  @Length(1, 255)
  referencia?: string;

  @IsOptional()
  @IsString()
  observaciones?: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  idinventario!: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  idusuario!: number;
}
