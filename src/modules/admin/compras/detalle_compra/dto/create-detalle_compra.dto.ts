import { Type } from 'class-transformer';
import { IsInt, IsNumber, Min } from 'class-validator';

export class CreateDetalleCompraDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  idproducto!: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  cantidad!: number;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  precio_unitario!: number;
}
