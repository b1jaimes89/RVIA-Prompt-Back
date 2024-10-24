import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LenguajesXPrompts } from './entities/lenguajes-x-prompts.entity';
import { CreateLenguajesXPromptsDto } from './dto/create-lenguajes-x-prompts.dto';

@Injectable()
export class LenguajesXPromptsService {
  constructor(
    @InjectRepository(LenguajesXPrompts)
    private readonly lenguajesXPromptsRepository: Repository<LenguajesXPrompts>,
  ) {}

  create(createLenguajesXPromptsDto: CreateLenguajesXPromptsDto) {
    const newRelation = this.lenguajesXPromptsRepository.create(createLenguajesXPromptsDto);
    return this.lenguajesXPromptsRepository.save(newRelation);
  }

  findAll() {
    return this.lenguajesXPromptsRepository.find({ relations: ['lenguaje', 'prompt'] });
  }

  findOne(idu_lenguaje: number, idu_prompt: number) {
    return this.lenguajesXPromptsRepository.findOne({
      where: { idu_lenguaje, idu_prompt },
      relations: ['lenguaje', 'prompt'],
    });
  }

  remove(idu_lenguaje: number, idu_prompt: number) {
    return this.lenguajesXPromptsRepository.delete({ idu_lenguaje, idu_prompt });
  }
} 
 