import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { LenguajesXPromptsService } from './lenguajes-x-prompts.service';
import { CreateLenguajesXPromptsDto } from './dto/create-lenguajes-x-prompts.dto';

// Use ApiTags to group requests in Swagger UI
@ApiTags('lenguajes-x-prompts')
@Controller('lenguajes-x-prompts')
export class LenguajesXPromptsController {
  constructor(private readonly lenguajesXPromptsService: LenguajesXPromptsService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Relación de Lenguaje y Prompt creada exitosamente.' })
  @ApiBody({ type: CreateLenguajesXPromptsDto })
  create(@Body() createLenguajesXPromptsDto: CreateLenguajesXPromptsDto) {
    return this.lenguajesXPromptsService.create(createLenguajesXPromptsDto);
  }
 
  @Get()
  @ApiResponse({ status: 200, description: 'Listar todas las relaciones de Lenguajes y Prompts.' })
  findAll() {
    return this.lenguajesXPromptsService.findAll();
  } 

  @Get(':idLenguaje/:idPrompt')
  @ApiParam({ name: 'idLenguaje', type: 'number', required: true })
  @ApiParam({ name: 'idPrompt', type: 'number', required: true })
  @ApiResponse({ status: 200, description: 'Relación de Lenguaje y Prompt encontrada.' })
  @ApiResponse({ status: 404, description: 'Relación de Lenguaje y Prompt no encontrada.' })
  findOne(@Param('idLenguaje') idLenguaje: string, @Param('idPrompt') idPrompt: string) {
    return this.lenguajesXPromptsService.findOne(+idLenguaje, +idPrompt);
  }

  @Delete(':idLenguaje/:idPrompt')
  @ApiParam({ name: 'idLenguaje', type: 'number', required: true })
  @ApiParam({ name: 'idPrompt', type: 'number', required: true })
  @ApiResponse({ status: 200, description: 'Relación de Lenguaje y Prompt eliminada exitosamente.' })
  @ApiResponse({ status: 404, description: 'Relación de Lenguaje y Prompt no encontrada.' })
  remove(@Param('idLenguaje') idLenguaje: string, @Param('idPrompt') idPrompt: string) {
    return this.lenguajesXPromptsService.remove(+idLenguaje, +idPrompt);
  }
}