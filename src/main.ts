import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Habilita CORS
  app.enableCors({
    origin: '*', // Permite todas las URLs de origen
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('API Example') // Cambia este título según tu API
    .setDescription('Descripción de la API') // Cambia esta descripción según tu API
    .setVersion('1.0')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // 'api' es la ruta en la que accederás a Swagger

  await app.listen(process.env.PORT);
  logger.log(`-> App running on port ${process.env.PORT}`);
}

bootstrap();  