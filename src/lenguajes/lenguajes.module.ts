import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { LenguajesService } from './lenguajes.service';
import { LenguajesController } from './lenguajes.controller';
import { Lenguaje } from './entities/lenguaje.entity'; 

@Module({
  imports: [TypeOrmModule.forFeature([Lenguaje])], 
  providers: [LenguajesService],
  controllers: [LenguajesController],
})
export class LenguajesModule {}
  