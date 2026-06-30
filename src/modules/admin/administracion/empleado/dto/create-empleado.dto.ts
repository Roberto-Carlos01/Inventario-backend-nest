import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class CreateEmpleadoDto {
  @IsString()
  @Length(7, 150)
  nombreCompleto!: string;

  @IsOptional()
  @IsString()
  @Length(5, 30)
  ci?: string;

  @IsOptional()
  @IsString()
  @Length(5, 30)
  telefono?: string;

  @IsOptional()
  @IsString()
  @Length(5, 255)
  direccion?: string;

  @IsOptional()
  @IsDateString()
  fecha_nac?: Date;

  @IsOptional()
  @IsDateString()
  fechaIngreso?: Date;

  @IsOptional()
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'El salario debe tener máximo 2 decimales' },
  )
  @Min(0)
  salarioBase?: number;

  @IsOptional()
  @IsBoolean()
  estado?: boolean;

  @IsOptional()
  @IsNumber()
  idusuario?: number;
}
