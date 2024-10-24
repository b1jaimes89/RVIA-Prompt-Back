import { Module } from '@nestjs/common';
import { LenguajesXPromptsController } from './lenguajes-x-prompts.controller';
import { LenguajesXPromptsService } from './lenguajes-x-prompts.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { LenguajesXPrompts } from './entities/lenguajes-x-prompts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LenguajesXPrompts])],
  controllers: [LenguajesXPromptsController],
  providers: [LenguajesXPromptsService]
})
export class LenguajesXPromptsModule {}
  