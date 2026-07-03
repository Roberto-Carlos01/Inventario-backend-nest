import {
  IsBoolean,
  IsDecimal,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class CreateImpuestoDto {
  @IsString()
  @Length(3, 100)
  nombre!: string;

  @IsDecimal({ decimal_digits: '5,2' })
  porcentaje!: number;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
