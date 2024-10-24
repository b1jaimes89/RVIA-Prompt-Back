import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Esquema } from '../../esquemas/entities/esquema.entity';
import { LenguajesXPrompts } from '../../lenguajes-x-prompts/entities/lenguajes-x-prompts.entity';

@Entity('tbl_prompts')
export class Prompt {
  @PrimaryGeneratedColumn()
  idu_prompt: number;

  @ManyToOne(() => Esquema, (esquema) => esquema.prompts)
  @JoinColumn({ name: 'idu_esquema' })  
  esquema: Esquema;

  @Column({ type: 'text', nullable: false })
  body: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fec_creacion: Date;

  @Column({ type: 'bigint', nullable: true })
  efectividad: number;  // Esto puede ser ajustado según tu necesidad

  @Column({ type: 'text', nullable: true })
  comentarios: string;

  @Column({ name: 'esactivo', type: 'boolean', default: true })
  esActivo: boolean;

  @OneToMany(() => LenguajesXPrompts, (lenguajeXPrompt) => lenguajeXPrompt.prompt)
  lenguajesXPrompts: LenguajesXPrompts[];
}  