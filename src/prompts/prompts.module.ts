import { Module } from '@nestjs/common';
import { PromptsController } from './prompts.controller';
import { PromptsService } from './prompts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prompt } from './entities/prompt.entity';
import { EsquemasModule } from '../esquemas/esquemas.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Prompt]),
    EsquemasModule // Importa el módulo que contiene EsquemaRepository
  ],
  controllers: [PromptsController],
  providers: [PromptsService]
})
export class PromptsModule {}
  