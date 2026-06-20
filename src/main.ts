/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // ==========================================
  // SWAGGER
  // ==========================================
  const config = new DocumentBuilder()
    .setTitle('API de Productos')
    .setDescription('Documentación de endpoints de la API de Productos')
    .setVersion('1.0')
    .addTag('productos') // 👉 Puedes agrupar endpoints por tags
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document); // 👉 Ruta: http://localhost:3000/api-docs
  await app.listen(process.env.PORT ?? 3000);

  // ==========================================
  // VALIDACION - class valitador
  // ==========================================
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // elimina propiedades no definidas en el DTO
      forbidNonWhitelisted: true, // lanza error si se envían campos no permitidos
      transform: true, // convierte tipos automáticamente (ej. string → number)
    }),
  );
}
bootstrap();
