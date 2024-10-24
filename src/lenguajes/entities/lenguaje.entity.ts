import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { LenguajesXPrompts } from '../../lenguajes-x-prompts/entities/lenguajes-x-prompts.entity';

@Entity('cat_lenguajes')
export class Lenguaje {
  @PrimaryGeneratedColumn()
  idu_lenguaje: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  nombre: string;

  @OneToMany(() => LenguajesXPrompts, (lenguajeXPrompt) => lenguajeXPrompt.lenguaje)
  lenguajesXPrompts: LenguajesXPrompts[];
}
  