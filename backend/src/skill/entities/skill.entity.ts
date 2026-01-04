import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from '../../project/entities/project.entity';

@Entity()
export class SkillEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @ManyToMany(() => Project, (project) => project.skills)
  projects: Project[];
}
