import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';

export class CreateInventarioDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  idproducto!: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  idalmacen!: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(0)
  stock_minimo?: number;
}
