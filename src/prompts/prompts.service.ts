import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prompt } from './entities/prompt.entity';
import { CreatePromptDto } from './dto/create-prompt.dto';
import { Esquema } from '../esquemas/entities/esquema.entity'; 

@Injectable()
export class PromptsService { 
  constructor(
    @InjectRepository(Prompt)
    private readonly promptRepository: Repository<Prompt>,
    @InjectRepository(Esquema) // Asegúrate de que el tipo sea correcto
    private readonly esquemaRepository: Repository<Esquema>,
  ) {}

  async create(createPromptDto: CreatePromptDto) {
    const esquema = await this.esquemaRepository.findOne({
      where: { idu_esquema: createPromptDto.esquemaId },
    });

    if (!esquema) {
      throw new Error('Esquema not found'); 
    }

    const newPrompt = this.promptRepository.create({
      ...createPromptDto,
      esquema, 
    });

    return this.promptRepository.save(newPrompt);
  }

  findAll() {
    return this.promptRepository.find({ relations: ['esquema'] });
  }

  findOne(idu_prompt: number) {
    return this.promptRepository.findOne({
      where: { idu_prompt },
      relations: ['esquema'],
    });
  }

  update(id: number, updatePromptDto: Partial<CreatePromptDto>) {
    return this.promptRepository.update(id, updatePromptDto);
  }

  remove(id: number) {
    return this.promptRepository.delete(id);
  }
}
  