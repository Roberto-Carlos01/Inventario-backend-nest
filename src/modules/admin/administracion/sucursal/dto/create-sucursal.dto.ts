import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
} from 'class-validator';

export class CreateSucursalDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 150)
  nombre!: string;
  @IsBoolean()
  @IsOptional()
  estado?: boolean;
  @IsString()
  @Length(3, 100)
  @IsOptional()
  ciudad?: string;
  @IsString()
  @Length(3, 255)
  @IsOptional()
  direccion?: string;
  @IsString()
  @Length(3, 30)
  @IsOptional()
  @Matches(/^[0-9+\-\s()]+$/)
  telefono?: string;
}
