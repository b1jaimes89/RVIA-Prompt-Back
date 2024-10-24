import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lenguaje } from './entities/lenguaje.entity';

@Injectable()
export class LenguajesService {
  constructor(
    @InjectRepository(Lenguaje)
    private readonly lenguajeRepository: Repository<Lenguaje>, 
  ) {}

  findAll() {
    return this.lenguajeRepository.find();
  }

  findOne(idu_lenguaje: number) {
    return this.lenguajeRepository.findOne({ where: { idu_lenguaje } });
  }
  
  create(lenguajeData: Partial<Lenguaje>) {
    const newLenguaje = this.lenguajeRepository.create(lenguajeData);
    return this.lenguajeRepository.save(newLenguaje);
  }

  update(id: number, updateData: Partial<Lenguaje>) {
    return this.lenguajeRepository.update(id, updateData);
  }

  remove(id: number) {
    return this.lenguajeRepository.delete(id);
  }
}
