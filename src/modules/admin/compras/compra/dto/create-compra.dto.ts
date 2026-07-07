import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class CreateCompraDto {
  @IsOptional()
  @IsString()
  @MaxLength(100)
  numero_factura_recibido?: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  idproveedor!: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  idalmacen!: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  idusuario!: number;
}
