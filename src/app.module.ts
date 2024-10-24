import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LenguajesModule } from './lenguajes/lenguajes.module';
import { EsquemasModule } from './esquemas/esquemas.module';
import { PromptsModule } from './prompts/prompts.module';
import { LenguajesXPromptsModule } from './lenguajes-x-prompts/lenguajes-x-prompts.module';
import { ConfigModule } from '@nestjs/config/dist/config.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize:false
    }),
    PromptsModule,            //si
    LenguajesXPromptsModule,  //si
    EsquemasModule,     //si
    LenguajesModule,    //si
  ],
})
export class AppModule {}
  