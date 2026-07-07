import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Length, Min } from 'class-validator';

export class CreateVentaDto {
  @IsOptional()
  @IsString()
  @Length(3, 50)
  metodoPago?: string;

  @IsOptional()
  @IsString()
  @Length(3, 50)
  estado?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  idfactura?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  idcliente?: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  idusuario!: number;
}
