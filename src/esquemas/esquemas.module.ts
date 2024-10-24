import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Esquema } from './entities/esquema.entity'; // Asegúrate de que la ruta sea correcta
import { EsquemasService } from './esquemas.service'; // Asegúrate de tener el servicio correspondiente
import { EsquemasController } from './esquemas.controller'; // Si tienes controladores

@Module({
  imports: [TypeOrmModule.forFeature([Esquema])],
  providers: [EsquemasService],
  controllers: [EsquemasController],
  exports: [TypeOrmModule] // Asegúrate de exportar el TypeOrmModule para que esté disponible en otros módulos
})
export class EsquemasModule {}
  