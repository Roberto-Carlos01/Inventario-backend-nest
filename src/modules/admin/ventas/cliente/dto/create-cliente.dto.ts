import { IsOptional, IsString, Length } from 'class-validator';

export class CreateClienteDto {
  @IsOptional()
  @IsString()
  @Length(3, 150)
  razon_social?: string;

  @IsOptional()
  @IsString()
  @Length(3, 50)
  ci_nit?: string;
}
