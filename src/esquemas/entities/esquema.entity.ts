import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Prompt } from '../../prompts/entities/prompt.entity';

@Entity('tbl_esquemas')
export class Esquema {
  @PrimaryGeneratedColumn()
  idu_esquema: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  descripcion: string;

  @OneToMany(() => Prompt, (prompt) => prompt.esquema)
  prompts: Prompt[];
}
  