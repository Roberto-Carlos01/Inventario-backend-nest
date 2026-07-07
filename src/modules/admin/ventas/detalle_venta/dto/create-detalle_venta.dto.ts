import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

export class CreateDetalleVentaDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  idproducto!: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  cantidad!: number;
}
