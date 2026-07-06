import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Length, Min } from 'class-validator';

export class CreateTrasladoDto {
  @IsOptional()
  @IsString()
  @Length(3, 50)
  estado?: string;

  @IsOptional()
  @IsString()
  observaciones?: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  idalmacen_envia!: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  idalmacen_recibe!: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  idusuario!: number;
}
