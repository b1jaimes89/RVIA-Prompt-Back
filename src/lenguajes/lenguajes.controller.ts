import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { LenguajesService } from './lenguajes.service';
import { CreateLenguajeDto } from './dto/create-lenguaje.dto';

// Use ApiTags to group requests in Swagger UI
@ApiTags('lenguajes')
@Controller('lenguajes')
export class LenguajesController {
  constructor(private readonly lenguajesService: LenguajesService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Lenguaje creado exitosamente.' })
  @ApiBody({ type: CreateLenguajeDto })
  create(@Body() createLenguajeDto: CreateLenguajeDto) {
    return this.lenguajesService.create(createLenguajeDto);
  }
  
  @Get()
  @ApiResponse({ status: 200, description: 'Listar todos los lenguajes.' })
  findAll() {
    return this.lenguajesService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: 'number', required: true })
  @ApiResponse({ status: 200, description: 'Lenguaje encontrado.' })
  @ApiResponse({ status: 404, description: 'Lenguaje no encontrado.' })
  findOne(@Param('id') id: string) {
    return this.lenguajesService.findOne(+id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: 'number', required: true })
  @ApiBody({ type: CreateLenguajeDto, required: false }) // Si se utiliza otro DTO para la actualización, cámbialo aquí.
  @ApiResponse({ status: 200, description: 'Lenguaje actualizado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Lenguaje no encontrado.' })
  update(@Param('id') id: string, @Body() updateLenguajeDto: Partial<CreateLenguajeDto>) {
    return this.lenguajesService.update(+id, updateLenguajeDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: 'number', required: true })
  @ApiResponse({ status: 200, description: 'Lenguaje eliminado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Lenguaje no encontrado.' })
  remove(@Param('id') id: string) {
    return this.lenguajesService.remove(+id);
  }
}