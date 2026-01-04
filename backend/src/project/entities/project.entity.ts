import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SkillEntity } from '../../skill/entities/skill.entity';

@Entity()
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: '/dopefolio.png' })
  imageUrl?: string;

  @Column()
  linkUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToMany(() => SkillEntity, (skill) => skill.projects, { cascade: true })
  @JoinTable()
  skills: SkillEntity[];
}
