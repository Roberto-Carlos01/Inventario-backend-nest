import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsStrongPassword,
  Length,
  MaxLength,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  @Length(4, 100)
  nombreUsuario!: string;

  @IsStrongPassword(
    {
      minLength: 8, // Mínimo 10 caracteres
      minLowercase: 1, // Al menos 1 minúscula
      minUppercase: 1, // Al menos 1 mayúscula
      minNumbers: 1, // Al menos 1 número
      minSymbols: 0, // 0 caracteres especiales requeridos
    },
    {
      message:
        'La contraseña debe tener al menos 8 caracteres e incluir letras minúsculas, mayúsculas y números.',
    },
  )
  @IsNotEmpty()
  password!: string;

  @IsOptional()
  @IsEmail({}, { message: 'el formato de correo electronico no es valido' })
  email?: string;

  @IsOptional()
  @IsBoolean()
  activo?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  foto_perfil?: string;
}
