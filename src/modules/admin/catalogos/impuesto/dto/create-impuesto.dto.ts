import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateImpuestoDto {
  @IsString()
  @Length(3, 100)
  nombre!: string;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  porcentaje!: number;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
