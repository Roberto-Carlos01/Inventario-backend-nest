import { IsEnum, IsOptional, IsString, Length } from 'class-validator';
import { EstadoFactura } from '../enum/estadoFactura';

export class CreateFacturaDto {
  @IsOptional()
  @IsString()
  @Length(1, 50)
  numeroFactura?: string;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  codigoControl?: string;

  @IsOptional()
  @IsEnum(EstadoFactura)
  estado?: EstadoFactura;

  @IsOptional()
  @IsString()
  @Length(1, 255)
  cuf?: string;

  @IsOptional()
  @IsString()
  @Length(1, 255)
  cufd?: string;
}
