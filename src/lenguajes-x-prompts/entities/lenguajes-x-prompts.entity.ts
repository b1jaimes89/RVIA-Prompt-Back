import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Lenguaje } from '../../lenguajes/entities/lenguaje.entity';
import { Prompt } from '../../prompts/entities/prompt.entity';

@Entity('LenguajesxPrompts')
export class LenguajesXPrompts {
  @PrimaryColumn()
  idu_lenguaje: number;

  @PrimaryColumn()
  idu_prompt: number;

  @ManyToOne(() => Lenguaje, (lenguaje) => lenguaje.lenguajesXPrompts)
  lenguaje: Lenguaje;

  @ManyToOne(() => Prompt, prompt => prompt.lenguajesXPrompts, { onDelete: 'CASCADE' })
  prompt: Prompt; 
}  