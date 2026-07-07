import { IsNotEmpty, IsString, Length, Max } from 'class-validator';

export class CreateProveedorDto {
  @IsNotEmpty()
  @IsString()
  @Max(150)
  razonsocial!: string;

  @IsString()
  @Length(3, 30)
  telefono?: string;

  @IsString()
  @Length(10, 150)
  email?: string;

  @IsString()
  @Length(3, 50)
  nit_ci?: string;

  @IsString()
  descripcion?: string;
}
