import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { EsquemasService } from './esquemas.service';
import { CreateEsquemaDto } from './dto/create-esquema.dto';

// Use ApiTags to group requests in Swagger UI
@ApiTags('esquemas')
@Controller('esquemas')
export class EsquemasController {
  constructor(private readonly esquemasService: EsquemasService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Esquema creado exitosamente.' })
  @ApiBody({ type: CreateEsquemaDto })
  create(@Body() createEsquemaDto: CreateEsquemaDto) {
    return this.esquemasService.create(createEsquemaDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Listar todos los esquemas.' })
  findAll() {
    return this.esquemasService.findAll();
  }
  
  @Get(':id')
  @ApiParam({ name: 'id', type: 'number', required: true })
  @ApiResponse({ status: 200, description: 'Esquema encontrado.' })
  @ApiResponse({ status: 404, description: 'Esquema no encontrado.' })
  findOne(@Param('id') id: string) {
    return this.esquemasService.findOne(+id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: 'number', required: true })
  @ApiBody({ type: CreateEsquemaDto, required: false }) // Change to the appropriate DTO for update if different
  @ApiResponse({ status: 200, description: 'Esquema actualizado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Esquema no encontrado.' })
  update(@Param('id') id: string, @Body() updateEsquemaDto: Partial<CreateEsquemaDto>) {
    return this.esquemasService.update(+id, updateEsquemaDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: 'number', required: true })
  @ApiResponse({ status: 200, description: 'Esquema eliminado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Esquema no encontrado.' })
  remove(@Param('id') id: string) {
    return this.esquemasService.remove(+id);
  }
}