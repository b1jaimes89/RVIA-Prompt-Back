import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiBody, ApiParam } from '@nestjs/swagger';
import { PromptsService } from './prompts.service';
import { CreatePromptDto } from './dto/create-prompt.dto';

// Use ApiTags to group requests in Swagger UI
@ApiTags('prompts')
@Controller('prompts')
export class PromptsController {
  constructor(private readonly promptsService: PromptsService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Prompt creado exitosamente.' })
  @ApiBody({ type: CreatePromptDto })
  create(@Body() createPromptDto: CreatePromptDto) {
    return this.promptsService.create(createPromptDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Listar todos los prompts.' })
  findAll() {
    return this.promptsService.findAll();
  }
  
  @Get(':id')
  @ApiParam({ name: 'id', type: 'number', required: true })
  @ApiResponse({ status: 200, description: 'Prompt encontrado.' })
  @ApiResponse({ status: 404, description: 'Prompt no encontrado.' })
  findOne(@Param('id') id: string) {
    return this.promptsService.findOne(+id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: 'number', required: true })
  @ApiBody({ type: CreatePromptDto, required: false }) // Cambia si es necesario un DTO diferente para la actualización
  @ApiResponse({ status: 200, description: 'Prompt actualizado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Prompt no encontrado.' })
  update(@Param('id') id: string, @Body() updatePromptDto: Partial<CreatePromptDto>) {
    return this.promptsService.update(+id, updatePromptDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: 'number', required: true })
  @ApiResponse({ status: 200, description: 'Prompt eliminado exitosamente.' })
  @ApiResponse({ status: 404, description: 'Prompt no encontrado.' })
  remove(@Param('id') id: string) {
    return this.promptsService.remove(+id);
  }
}