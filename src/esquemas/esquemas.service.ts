import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Esquema } from './entities/esquema.entity';
import { CreateEsquemaDto } from './dto/create-esquema.dto';

@Injectable()
export class EsquemasService {
  constructor(
    @InjectRepository(Esquema)
    private readonly esquemaRepository: Repository<Esquema>,
  ) {}

  create(createEsquemaDto: CreateEsquemaDto) {
    const newEsquema = this.esquemaRepository.create(createEsquemaDto);
    return this.esquemaRepository.save(newEsquema);
  } 
 
  findAll() {
    return this.esquemaRepository.find();
  }

  findOne(idu_esquema: number) {
    return this.esquemaRepository.findOne({ where: { idu_esquema } });
  }

  update(id: number, updateEsquemaDto: Partial<CreateEsquemaDto>) {
    return this.esquemaRepository.update(id, updateEsquemaDto);
  }

  remove(id: number) {
    return this.esquemaRepository.delete(id);
  }
}
