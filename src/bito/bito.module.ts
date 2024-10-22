import { Module } from '@nestjs/common';
import { BitoService } from './bito.service';
import { BitoController } from './bito.controller';

@Module({
  controllers: [BitoController],
  providers: [BitoService],
})
export class BitoModule {}
